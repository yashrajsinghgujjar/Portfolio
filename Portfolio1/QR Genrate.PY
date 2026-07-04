import qrcode

# Jo data aapko QR mein daalna hai
data = "https://www.linkedin.com/in/yashrajsinghgujjar/"

# QR code generate karna
img = qrcode.make(data)

# Image ko save karna
img.save("YASHRAJ-1-{CODE}.png")

print("QR Code ban gaya hai!")