// Base64 এনকোড করা JavaScript কোড
const encodedScript = "ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImltYWdlLWZvcm0iKS5hZGRFdmVudExpc3RlbmVyKCJzdWJtaXQiLCBhc3luYyAoZXZlbnQpID0+IHsKICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsKCiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJwcm9tcHQiKS52YWx1ZTsKICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgibW9kZWwiKS52YWx1ZTsKICAgICAgICAgICAgY29uc3QgaW1hZ2VSZXN1bHREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiaW1hZ2UtcmVzdWx0Iik7CiAgICAgICAgICAgIGNvbnN0IGdlbmVyYXRlZEltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImdlbmVyYXRlZC1pbWFnZSIpOwogICAgICAgICAgICBjb25zdCBsb2FkaW5nRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImxvYWRpbmciKTsKICAgICAgICAgICAgY29uc3QgZG93bmxvYWRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiZG93bmxvYWQtYnRuIik7CgogICAgICAgICAgICAvLyBTaG93IGxvYWRpbmcgYW5pbWF0aW9uCiAgICAgICAgICAgIGxvYWRpbmdEaXYuc3R5bGUuZGlzcGxheSA9ICJibG9jayI7CiAgICAgICAgICAgIGltYWdlUmVzdWx0RGl2LnN0eWxlLmRpc3BsYXkgPSAibm9uZSI7CgogICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgY29uc3QgYXBpVXJsID0gaHR0cHM6Ly93ZHpvbmUtYWktaW1lLWdlbmVyYXRvci1hcGkud29vZG1pcnJvci53b3JrZXJzLmRldi8/aW5wdXQ9JHtlbmNvZGVVUklDb21wb25lbnQocHJvbXB0KX0mbW9kZWw9JHtlbmNvZGVVUklDb21wb25lbnQobW9kZWwpfTsKICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsKTsKCiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoIkZhaWxlZCB0byBnZW5lcmF0ZSBpbWFnZSEiKTsKCiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOwoKICAgICAgICAgICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5pbWFnZV91cmwpIHsKICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIkludmFsaWQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXIuIik7CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgZ2VuZXJhdGVkSW1hZ2Uuc3JjID0gZGF0YS5pbWFnZV91cmw7CgogICAgICAgICAgICAgICAgLy8gSGlkZSBsb2FkaW5nIGFuZCBzaG93IGltYWdlCiAgICAgICAgICAgICAgICBsb2FkaW5nRGl2LnN0eWxlLmRpc3BsYXkgPSAibm9uZSI7CiAgICAgICAgICAgICAgICBpbWFnZVJlc3VsdERpdi5zdHlsZS5kaXNwbGF5ID0gImJsb2NrIjsKCiAgICAgICAgICAgICAgICAvLyBFbmFibGUgZG93bmxvYWQgYnV0dG9uCiAgICAgICAgICAgICAgICBkb3dubG9hZEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJhIik7CiAgICAgICAgICAgICAgICAgICAgYS5ocmVmID0gZGF0YS5pbWFnZV91cmw7CiAgICAgICAgICAgICAgICAgICAgYS5kb3dubG9hZCA9ICJnZW5lcmF0ZWRfaW1hZ2UucG5nIjsKICAgICAgICAgICAgICAgICAgICBhLmNsaWNrKCk7CiAgICAgICAgICAgICAgICB9OwogICAgICAgICAgICB9IGNhdGNoIChlcnJvcikgewogICAgICAgICAgICAgICAgYWxlcnQoIkVycm9yOiAiICsgZXJyb3IubWVzc2FnZSk7CiAgICAgICAgICAgICAgICBsb2FkaW5nRGl2LnN0eWxlLmRpc3BsYXkgPSAibm9uZSI7CiAgICAgICAgICAgIH0KICAgICAgICB9KTs=";

// **Base64 ডিকোড করে রান করানোর ফাংশন**
function decodeAndRunScript(encodedStr) {
    try {
        if (!encodedStr) throw new Error("❌ encodedScript ডিফাইন্ড নেই!");

        const decodedScript = atob(encodedStr);
        console.log("Decoded Script:", decodedScript);

        const scriptElement = document.createElement("script");
        scriptElement.innerHTML = decodedScript;
        document.body.appendChild(scriptElement);

        document.getElementById('status').innerHTML = "✅ স্ক্রিপ্ট সফলভাবে লোড হয়েছে!";
        console.log("✅ Script Loaded Successfully!");
    } catch (error) {
        console.error("❌ ডিকোডিং তে সমস্যা:", error);
        document.getElementById('status').innerHTML = "❌ স্ক্রিপ্ট লোড করতে সমস্যা হয়েছে!";
    }
}

// **শুধুমাত্র `DOMContentLoaded` ব্যবহার করো**
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        decodeAndRunScript(encodedScript);
    }, 100);
});
