import wave
from subprocess import check_call
import pyglet
import winsound

# audio = pyglet.media.load("1.wav")
# audio.play()
winsound.PlaySound("1.wav", winsound.SND_LOOP)
# with wave.open("1.wav", "rb") as wav_file:
#     n_channels = wav_file.getnchannels()