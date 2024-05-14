const backGroundImage = "https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/pokemon-chromebook-wallpaper.jpg"

export const styles = {
    stylesLandingPage:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttomLandingPage:{
            padding: '10px 20px',
            fontSize: '1.5rem',
            backgroundColor: 'transparent',
            color: 'white',
            border: '2px solid white',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
                 
    },
    fondoPantalla:{
        backgroundImage:`url(${backGroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh'
    }
};

