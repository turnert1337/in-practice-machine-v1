#!/usr/bin/env python3
"""Generates the six LOSSY badge-logo options + a contact sheet.

Run: python3 make_logos.py   (writes into this folder)
Every option keeps LOSSY as the hero, stretched to fill its badge so it stays
readable at Substack's ~40px avatar size.
"""
import math, random
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

HERE = Path(__file__).resolve().parent
S = 1024
SS = 2  # supersample factor for smooth shapes

FONTS = {
    "black": "/System/Library/Fonts/Supplemental/Arial Black.ttf",
    "din": "/System/Library/Fonts/Supplemental/DIN Condensed Bold.ttf",
    "mono": "/System/Library/Fonts/Menlo.ttc",
    "avenir": "/System/Library/Fonts/Avenir Next.ttc",
}

# --- 5x7 pixel font -------------------------------------------------------
BOLD = {
    "L": ["110000"] * 6 + ["111111", "111111"],
    "O": ["011110", "111111", "110011", "110011", "110011", "110011", "111111", "011110"],
    "S": ["011111", "111111", "110000", "111110", "011111", "000011", "111111", "111110"],
    "Y": ["110011", "110011", "111111", "011110", "001100", "001100", "001100", "001100"],
}

GLYPHS = {
    "L": ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
    "O": ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
    "S": ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
    "Y": ["10001", "10001", "01010", "00100", "00100", "00100", "00100"],
}


def pixel_cells(word="LOSSY", gap=1, font=None):
    """Return list of (col,row) lit cells and grid size."""
    font = font or GLYPHS
    w, h = len(font["L"][0]), len(font["L"])
    cells, x = [], 0
    for ch in word:
        for r, line in enumerate(font[ch]):
            for c, v in enumerate(line):
                if v == "1":
                    cells.append((x + c, r))
        x += w + gap
    return cells, x - gap, h


def text_mask(text, font_key, box_w, box_h, index=0):
    """Render text, crop to ink, stretch to exactly box_w x box_h ('squeezed')."""
    f = ImageFont.truetype(FONTS[font_key], 400, index=index)
    tmp = Image.new("L", (3000, 800), 0)
    ImageDraw.Draw(tmp).text((50, 50), text, font=f, fill=255)
    tmp = tmp.crop(tmp.getbbox())
    return tmp.resize((box_w, box_h), Image.LANCZOS)


def rounded_mask(size, radius):
    m = Image.new("L", (size * SS, size * SS), 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, size * SS - 1, size * SS - 1], radius * SS, fill=255)
    return m.resize((size, size), Image.LANCZOS)


def circle_mask(size):
    m = Image.new("L", (size * SS, size * SS), 0)
    ImageDraw.Draw(m).ellipse([0, 0, size * SS - 1, size * SS - 1], fill=255)
    return m.resize((size, size), Image.LANCZOS)


def hexc(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


# --- 1. Block Decay: crisp on the left, JPEG-blocked on the right ----------
def logo_block_decay():
    bg, fg = hexc("#111111"), hexc("#F4EFE6")
    img = Image.new("RGB", (S, S), bg)
    d = ImageDraw.Draw(img)
    d.rectangle([40, 40, S - 41, S - 41], outline=fg, width=28)
    bw, bh = 820, 470
    m = text_mask("LOSSY", "black", bw, bh)
    # progressive mosaic per vertical strip: block size grows left -> right
    out = Image.new("L", (bw, bh), 0)
    strips = 10
    for i in range(strips):
        x0, x1 = int(bw * i / strips), int(bw * (i + 1) / strips)
        strip = m.crop((x0, 0, x1, bh))
        blk = [1, 1, 1, 1, 1, 4, 8, 13, 18, 24][i]
        if blk > 1:
            sw, sh = max(1, strip.width // blk), max(1, bh // blk)
            strip = strip.resize((sw, sh), Image.BOX).resize((strip.width, bh), Image.NEAREST)
            strip = strip.point(lambda v: 255 if v > 110 else 0)
        out.paste(strip, (x0, 0))
    color = Image.new("RGB", (bw, bh), fg)
    img.paste(color, ((S - bw) // 2, (S - bh) // 2), out)
    # tiny 8x8 quantization grid hint in the frame corner
    for k in range(4):
        s = 34 - k * 6
        d.rectangle([S - 150 + k * 26, S - 150 + k * 26, S - 150 + k * 26 + s, S - 150 + k * 26 + s], fill=fg)
    return img


# --- 2. 8-Bit Badge: hand-drawn pixel font, drop shadow, bold orange --------
def logo_8bit():
    bg, ink, sh = hexc("#FF5F1F"), hexc("#111111"), hexc("#FFD9B8")
    img = Image.new("RGB", (S, S), bg)
    d = ImageDraw.Draw(img)
    # stepped (pixel-art) frame
    t, a, b = 32, 64, S - 64
    d.rectangle([a + t, a, b - t, a + t - 1], fill=ink)      # top
    d.rectangle([a + t, b - t + 1, b - t, b], fill=ink)      # bottom
    d.rectangle([a, a + t, a + t - 1, b - t], fill=ink)      # left
    d.rectangle([b - t + 1, a + t, b, b - t], fill=ink)      # right
    cells, gw, gh = pixel_cells(font=BOLD)
    cw, ch = 24, 50
    W, H = gw * cw, gh * ch
    ox, oy = (S - W) // 2, (S - H) // 2
    for (c, r) in cells:  # shadow first
        d.rectangle([ox + c * cw + 12, oy + r * ch + 12, ox + (c + 1) * cw + 11, oy + (r + 1) * ch + 11], fill=sh)
    for (c, r) in cells:
        d.rectangle([ox + c * cw, oy + r * ch, ox + (c + 1) * cw - 1, oy + (r + 1) * ch - 1], fill=ink)
    return img


# --- 3. Pixel Dissolve: letters built from blocks that break away ----------
def logo_dissolve():
    bg, fg = hexc("#14213D"), hexc("#F3E6C4")
    accents = [hexc("#E8962A"), hexc("#C4501F"), hexc("#3FA796")]
    img = Image.new("RGB", (S, S), bg)
    d = ImageDraw.Draw(img)
    cell = 22
    bw, bh = 836, 506
    m = text_mask("LOSSY", "din", bw, bh)
    ox, oy = (S - bw) // 2, (S - bh) // 2 + 30
    rnd = random.Random(7)
    cols, rows = bw // cell, bh // cell
    for cy in range(rows):
        for cx in range(cols):
            box = m.crop((cx * cell, cy * cell, (cx + 1) * cell, (cy + 1) * cell))
            cov = sum(box.tobytes()) / (cell * cell * 255)
            if cov < 0.45:
                continue
            x, y = ox + cx * cell, oy + cy * cell
            # dissolve zone: upper-right of the Y breaks away
            fx = cx / cols
            fy = 1 - cy / rows
            p = max(0, (fx - 0.84) / 0.16) * max(0, fy - 0.35) * 0.9
            if rnd.random() < p:
                dist = 40 + rnd.random() * 160 * p
                ang = -math.pi / 4 + (rnd.random() - 0.5) * 0.9
                nx, ny = x + dist * math.cos(ang), y + dist * math.sin(ang)
                s = max(6, int(cell * (1 - 0.5 * p)))
                col = rnd.choice(accents + [fg])
                d.rectangle([nx, ny, nx + s - 3, ny + s - 3], fill=col)
            else:
                d.rectangle([x, y, x + cell - 3, y + cell - 3], fill=fg)
    # stray flying pixels in the top-right corner
    for _ in range(26):
        x, y = 760 + rnd.random() * 210, 60 + rnd.random() * 220
        s = rnd.choice([8, 12, 16])
        d.rectangle([x, y, x + s, y + s], fill=rnd.choice(accents))
    d.rectangle([28, 28, S - 29, S - 29], outline=fg, width=10)
    return img


# --- 4. Terminal Seal: phosphor CRT circle, '#' markdown heading nod --------
def logo_terminal():
    bg, g = hexc("#0B0F0C"), hexc("#48F57B")
    big = S * SS
    img = Image.new("RGB", (big, big), hexc("#000000"))
    d = ImageDraw.Draw(img)
    d.ellipse([0, 0, big - 1, big - 1], fill=bg)
    d.ellipse([40, 40, big - 41, big - 41], outline=g, width=22)
    d.ellipse([200, 200, big - 201, big - 201], outline=g, width=10)
    # ring text
    f = ImageFont.truetype(FONTS["mono"], 92, index=1)
    ring = "THE GREAT RE-ENCODE INTO MARKDOWN • READLOSSY • "
    r = big / 2 - 120
    n = len(ring)
    for i, chr_ in enumerate(ring):
        a = -math.pi / 2 + 2 * math.pi * i / n
        gl = Image.new("RGBA", (130, 130), (0, 0, 0, 0))
        ImageDraw.Draw(gl).text((65, 65), chr_, font=f, fill=g + (255,), anchor="mm")
        gl = gl.rotate(-math.degrees(a) - 90, resample=Image.BICUBIC)
        x, y = big / 2 + r * math.cos(a) - 65, big / 2 + r * math.sin(a) - 65
        img.paste(gl, (int(x), int(y)), gl)
    img = img.resize((S, S), Image.LANCZOS)
    d = ImageDraw.Draw(img)
    # '#' heading mark + LOSSY + cursor
    bw, bh = 600, 330
    m = text_mask("LOSSY", "mono", bw, bh, index=1)
    ox, oy = (S - bw) // 2, (S - bh) // 2
    img.paste(Image.new("RGB", (bw, bh), g), (ox, oy), m)
    # scanlines inside the inner circle
    sl = Image.new("L", (S, S), 0)
    sd = ImageDraw.Draw(sl)
    for y in range(0, S, 8):
        sd.line([0, y, S, y], fill=70, width=3)
    inner = Image.new("L", (S, S), 0)
    ImageDraw.Draw(inner).ellipse([100, 100, S - 101, S - 101], fill=255)
    from PIL import ImageChops
    img.paste(Image.new("RGB", (S, S), bg), (0, 0), ImageChops.multiply(sl, inner))
    # outer area outside circle -> same dark
    outer = ImageChops.invert(circle_mask(S))
    img.paste(Image.new("RGB", (S, S), bg), (0, 0), outer)
    return img


# --- 5. In Practice Shield: Jeremy's palette, pixel-eroded shapes -----------
def logo_shield():
    navy, cream = hexc("#101A33"), hexc("#F3E6C4")
    amber, burnt = hexc("#E8962A"), hexc("#C4501F")
    big = S * SS
    img = Image.new("RGB", (big, big), navy)
    d = ImageDraw.Draw(img)
    # shield silhouette
    m = Image.new("L", (big, big), 0)
    md = ImageDraw.Draw(m)
    top, side, bot = 70 * SS, 90 * SS, 980 * SS
    md.polygon([(side, top), (big - side, top), (big - side, 600 * SS),
                (big // 2, bot), (side, 600 * SS)], fill=255)
    md.rectangle([side, top, big - side, 620 * SS], fill=255)
    m = m.resize((S, S), Image.LANCZOS)
    img = Image.new("RGB", (S, S), cream)
    body = Image.new("RGB", (S, S), navy)
    bd = ImageDraw.Draw(body)
    # Jeremy-style shapes, rendered blocky (lossy) at their edges
    shapes = Image.new("RGB", (S // 32, S // 32), navy)
    sd = ImageDraw.Draw(shapes)
    sd.ellipse([20, -10, 40, 9], fill=amber)
    sd.rectangle([13, 24, 18, 32], fill=burnt)
    shapes = shapes.resize((S, S), Image.NEAREST)
    body.paste(shapes, (0, 0))
    bw, bh = 700, 400
    tm = text_mask("LOSSY", "din", bw, bh)
    pad = Image.new("L", (bw + 40, bh + 40), 0)
    pad.paste(tm, (20, 20))
    halo = pad.filter(ImageFilter.MaxFilter(25))
    body.paste(Image.new("RGB", pad.size, navy), ((S - bw) // 2 - 20, 300 - 20), halo)
    body.paste(Image.new("RGB", (bw, bh), cream), ((S - bw) // 2, 300), tm)
    img.paste(body, (0, 0), m)
    # inner shield outline
    ol = Image.new("L", (S, S), 0)
    inner = m.filter(ImageFilter.MinFilter(41))
    from PIL import ImageChops
    ring = ImageChops.subtract(inner, inner.filter(ImageFilter.MinFilter(13)))
    img.paste(Image.new("RGB", (S, S), amber), (0, 0), ring)
    return img


# --- 6. Halftone Disc: LOSSY in halftone dots on burnt orange --------------
def logo_halftone():
    bg, dot, ring = hexc("#C4501F"), hexc("#FBEFD9"), hexc("#FBEFD9")
    big = S * SS
    img = Image.new("RGB", (big, big), dot)
    d = ImageDraw.Draw(img)
    d.ellipse([0, 0, big - 1, big - 1], fill=bg)
    d.ellipse([48, 48, big - 49, big - 49], outline=ring, width=24)
    bw, bh = 760, 480
    m = text_mask("LOSSY", "black", bw * SS, bh * SS)
    ox, oy = (big - bw * SS) // 2, (big - bh * SS) // 2
    step = 19 * SS
    for y in range(0, bh * SS, step):
        for x in range(0, bw * SS, step):
            box = m.crop((x, y, x + step, y + step))
            cov = sum(box.tobytes()) / (step * step * 255)
            if cov <= 0.02:
                continue
            rr = step * 0.72 * math.sqrt(cov)
            cx, cy = ox + x + step / 2, oy + y + step / 2
            d.ellipse([cx - rr, cy - rr, cx + rr, cy + rr], fill=dot)
    # faint background halftone fade in the lower half of the disc
    for y in range(int(big * 0.78), big, step):
        for x in range(0, big, step):
            t = (y - big * 0.78) / (big * 0.22)
            rr = step * 0.18 * t
            if rr > 1 and (x - big / 2) ** 2 + (y - big / 2) ** 2 < (big / 2 - 90 * SS) ** 2:
                d.ellipse([x - rr, y - rr, x + rr, y + rr], fill=hexc("#E07A3E"))
    img = img.resize((S, S), Image.LANCZOS)
    outer = Image.new("L", (S, S), 0)
    from PIL import ImageChops
    outer = ImageChops.invert(circle_mask(S))
    img.paste(Image.new("RGB", (S, S), bg), (0, 0), outer)
    return img


LOGOS = [
    ("Block Decay", logo_block_decay),
    ("8-Bit Badge", logo_8bit),
    ("Pixel Dissolve", logo_dissolve),
    ("Terminal Seal", logo_terminal),
    ("In Practice Shield", logo_shield),
    ("Halftone Disc", logo_halftone),
]


def contact_sheet(imgs):
    big, small, pad, label_h = 420, 40, 50, 70
    cols = 3
    cw = big + pad
    ch = label_h + big + 30 + small + 50
    W = cols * cw + pad
    H = 2 * ch + pad + 60
    sheet = Image.new("RGB", (W, H), hexc("#FFFFFF"))
    d = ImageDraw.Draw(sheet)
    fnum = ImageFont.truetype(FONTS["black"], 52)
    fname = ImageFont.truetype(FONTS["avenir"], 26, index=0)
    fsm = ImageFont.truetype(FONTS["avenir"], 18, index=0)
    d.text((pad, 18), "LOSSY logo options  —  vote by number. Bottom row of each: actual 40px size (square + round crop).",
           font=fsm, fill=hexc("#444444"))
    for i, (name, im) in enumerate(imgs):
        r, c = divmod(i, cols)
        x, y = pad + c * cw, 60 + pad // 2 + r * ch
        d.text((x, y), str(i + 1), font=fnum, fill=hexc("#111111"))
        d.text((x + 60, y + 20), name, font=fname, fill=hexc("#333333"))
        sheet.paste(im.resize((big, big), Image.LANCZOS), (x, y + label_h))
        sy = y + label_h + big + 30
        tiny = im.resize((small, small), Image.LANCZOS)
        sheet.paste(tiny, (x, sy))
        sheet.paste(tiny, (x + small + 20, sy), circle_mask(small))
        d.text((x + 2 * small + 40, sy + 8), "<- 40px", font=fsm, fill=hexc("#777777"))
    return sheet


def main():
    imgs = []
    for i, (name, fn) in enumerate(LOGOS, 1):
        im = fn().convert("RGB")
        assert im.size == (S, S)
        im.save(HERE / f"lossy_logo_{i}.png")
        im.resize((256, 256), Image.LANCZOS).save(HERE / f"lossy_logo_{i}_256.png")
        imgs.append((name, im))
    contact_sheet(imgs).save(HERE / "contact_sheet.png")
    print("wrote 6 logos + contact_sheet.png to", HERE)


if __name__ == "__main__":
    main()
