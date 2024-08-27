document.getElementById('generateCard').addEventListener('click', function() {
    // Generate admit card content
    const admitCardContent = `
        <h1>Admit Card</h1>
        <p>Student Name: John Doe</p>
        <p>Course: Science</p>
        <p>Admission Number: 123456</p>
    `;

    // Convert content to a PDF
    const doc = new jsPDF();
    doc.text(admitCardContent, 10, 10);
    const pdf = doc.output('blob');
    
    const link = document.getElementById('downloadLink');
    link.href = URL.createObjectURL(pdf);
    link.style.display = 'block';
    link.click();
});
