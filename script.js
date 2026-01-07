// Smooth scrolling for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(link => {
     link.addEventListener('click', function(e) {
        e.preventDefault();


        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }    
    });
});
        
        // Product hover animations
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

         function calculateBudget() { 
    const allowance = Number(document.getElementById("allowance").value); 
    const food = Number(document.getElementById("food").value); 
    const transport = Number(document.getElementById("transport").value); 
    const study = Number(document.getElementById("study").value); 
    const entertainment = Number(document.getElementById("entertainment").value); 
            
    if (allowance <= 0) { 
        document.getElementById("result").innerText =
            "Please enter a valid allowance amount."; 
        return; 
    } 
            
    const totalSpent = food + transport + study + entertainment; 
    const balance = allowance - totalSpent; 
    const ratio = totalSpent / allowance; 
            
    let status = ""; 
    if (ratio <= 0.7) { 
        status = "✅ Spending Status: Healthy";
    } else if (ratio <= 0.9) { 
        status = "⚠️ Spending Status: Caution";
    } else { 
        status = "❌ Spending Status: Overspending"; 
    } 
            
    document.getElementById("result").innerHTML = `
        <strong>Total Spent:</strong> RM ${totalSpent.toFixed(2)} <br>
        <strong>Remaining Balance:</strong> RM ${balance.toFixed(2)} <br>
        ${status}
    `;
}

