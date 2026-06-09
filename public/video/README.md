# Hover-Video (DSGVO-konform)

Das Video für den Hero-Hover-Effekt muss hier als `hover-reel.mp4` abgelegt werden.

## Download

Das Instagram-Reel muss lokal gehostet werden (DSGVO: kein externer Embed).

**Option 1 — yt-dlp:**
```bash
pip install yt-dlp
yt-dlp "https://www.instagram.com/reels/DL986DdtNV7/" \
  --merge-output-format mp4 \
  -o "public/video/hover-reel.mp4"
```

**Option 2 — Browser:**
1. Instagram Reel im Browser öffnen
2. Video-Downloader-Erweiterung nutzen
3. Datei als `hover-reel.mp4` in diesen Ordner legen

## Format-Empfehlung
- Format: MP4 (H.264)
- Auflösung: max. 1080p
- Dateigröße: ideally < 15 MB (Ladezeit)
