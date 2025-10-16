document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const messageEl = document.getElementById('message');
    
    // التحقق من صحة الإيميل
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('❌ الإيميل غير صحيح!', 'error');
        return;
    }
    
    // حفظ الإيميل
    saveUser(email);
    
    // عرض رسالة نجاح
    showMessage(`✅ تم تسجيل الدخول بنجاح! مرحباً ${email}`, 'success');
    
    // إعادة تعيين النموذج
    document.getElementById('loginForm').reset();
    
    // توجيه بعد 2 ثانية (اختياري)
    setTimeout(() => {
        alert(`تم تسجيل الدخول!\nإيميلك: ${email}\nيمكنك الآن استخدام الموقع`);
    }, 1500);
});

// حفظ المستخدم في localStorage
function saveUser(email) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // إضافة المستخدم الجديد أو تحديثه
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        existingUser.lastLogin = new Date().toLocaleString('ar-EG');
    } else {
        users.push({
            email: email,
            firstLogin: new Date().toLocaleString('ar-EG'),
            lastLogin: new Date().toLocaleString('ar-EG')
        });
    }
    
    localStorage.setItem('users', JSON.stringify(users));
}

// عرض الرسائل
function showMessage(text, type) {
    const messageEl = document.getElementById('message');
    messageEl.textContent = text;
    messageEl.className = `message ${type}`;
    messageEl.style.display = 'block';
    
    // إخفاء الرسالة بعد 4 ثوان
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 4000);
}

// تحميل المستخدم الحالي عند بدء الصفحة
window.onload = function() {
    const currentUser = getCurrentUser();
    if (currentUser) {
        console.log(`المستخدم الحالي: ${currentUser.email}`);
    }
};

function getCurrentUser() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users[users.length - 1]; // آخر مستخدم
}