#!/bin/bash
# Esegui questo script una sola volta dopo aver caricato il sito sul server.
# Uso: bash set_domain.sh https://tuodominio.com

DOMAIN="${1:-https://tuodominio.com}"

for f in index.html info.html galleria.html prenota.html; do
  sed -i "s|YOUR_DOMAIN|${DOMAIN}|g" "$f"
  echo "✓ $f"
done

echo ""
echo "Fatto! og:image ora punta a: ${DOMAIN}/images/living/living_1.jpg"
echo "Verifica le anteprime su: https://developers.facebook.com/tools/debug/"
echo "                          https://cards-dev.twitter.com/validator"
