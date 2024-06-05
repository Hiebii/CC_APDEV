function setDateRange() {
                const today = new Date();
    
                const yyyy = today.getFullYear();
                const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
                const dd = String(today.getDate()).padStart(2, '0');
    
                const todayFormatted = `${yyyy}-${mm}-${dd}`;
    
                const sevenDaysFromToday = new Date(today);
                sevenDaysFromToday.setDate(today.getDate() + 7);
    
                const yyyy7 = sevenDaysFromToday.getFullYear();
                const mm7 = String(sevenDaysFromToday.getMonth() + 1).padStart(2, '0');
                const dd7 = String(sevenDaysFromToday.getDate()).padStart(2, '0');
    
                const sevenDaysFromTodayFormatted = `${yyyy7}-${mm7}-${dd7}`;
                const dateInput = document.getElementById('dateInput');
                dateInput.setAttribute('min', todayFormatted);
                dateInput.setAttribute('max', sevenDaysFromTodayFormatted);
            }
    
            document.addEventListener('DOMContentLoaded', setDateRange);
