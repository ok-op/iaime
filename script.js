document.addEventListener("DOMContentLoaded", function () {
    const decodedCode = atob("ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImltYWdlLWZvcm0iKS5hZGRFdmVudExpc3RlbmVyKCJzdWJtaXQiLCBhc3luYyAoZXZlbnQpID0+IHsKICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsKCiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJwcm9tcHQiKS52YWx1ZTsKICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgibW9kZWwiKS52YWx1ZTsKICAgICAgICAgICAgY29uc3QgaW1hZ2VSZXN1bHREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiaW1hZ2UtcmVzdWx0Iik7CiAgICAgICAgICAgIH0pOw==");

    console.log("Decoded Code:", decodedCode); // চেক করার জন্য
    
    try {
        eval(decodedCode);
    } catch (error) {
        console.error("Error executing decoded script:", error);
    }
});
