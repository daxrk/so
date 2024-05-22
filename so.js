    // النطاق الصحيح الذي ترغب في التحقق منه
const correctDomain = "packatmobile.com";

// الحصول على النطاق الحالي
const currentDomain = window.location.hostname;

// التحقق من النطاق
if (currentDomain !== correctDomain) {
    // مسح محتويات body إذا كان النطاق غير صحيح
    document.body.innerHTML = "";
}
