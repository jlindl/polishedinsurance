
# This is a temporary script to copy the hero background correctly.
# PowerShell copy command does not use /Y.
import shutil
import os

source = r"C:\Users\User\.gemini\antigravity\brain\9a5d0d29-b060-400d-81b9-e27e6453e9bc\hero_cleaning_bg_1768565313819.png"
destination = r"c:\Users\User\OneDrive\Desktop\PolishedV2\my-app\public\hero-cleaning-bg.png"

try:
    shutil.copy2(source, destination)
    print("Successfully copied hero background.")
except Exception as e:
    print(f"Error copying file: {e}")
