import yt_dlp

def download_video(link):
    try:
        # Downloader ki settings
        ydl_opts = {
            'format': 'best', # Sabse acchi quality download karega
            'outtmpl': '%(title)s.%(ext)s', # File ka naam video title par rakhega
        }
        
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            print("Downloading shuru ho rahi hai...")
            ydl.download([link])
            print("Download Complete!")
            
    except Exception as e:
        print(f"Error: {e}")

# User se link maangna
url = input("Apna link yahan paste karein: ")
download_video(url)