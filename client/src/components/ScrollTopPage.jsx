import React from 'react';

function ScrollTopPage() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={handleScrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
            Volver arriba
        </button>
    );
}

export default ScrollTopPage;
