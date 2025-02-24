// Base64 এনকোড করা স্ক্রিপ্ট
const encodedScript = "Y29uc29sZS5sb2coJ0hlbGxvLCB0aGlzIGlzIGFuIGVuY29kZWQgc2NyaXB0IScpOw==";

// ফাংশন: ডিকোড এবং রান করানো
function decodeAndRunScript(encodedStr) {
    try {
        const decodedScript = atob(encodedStr); // Base64 থেকে ডিকোড
        const scriptElement = document.createElement("script");
        scriptElement.textContent = decodedScript; // ডিকোড করা JS সেট করো
        document.body.appendChild(scriptElement); // HTML-এ যোগ করো
        console.log("Script Loaded Successfully!");
    } catch (error) {
        console.error("ডিকোডিং তে সমস্যা:", error);
    }
}

// পেজ লোড হলে রান করানো
window.onload = function () {
    decodeAndRunScript(encodedScript);
};
