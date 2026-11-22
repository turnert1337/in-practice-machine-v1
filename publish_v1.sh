#!/bin/sh
# One job: create the public GitHub repo for machine v1 and push what's staged.
# Turner runs this himself — the publish decision is his.
cd "$(dirname "$0")" || exit 1
exec gh repo create turnert1337/in-practice-machine-v1 --public --source . --push
