import React from 'react'
import Particles from './Particles'

const Background = () => {
    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#000000',
                overflow: 'hidden',
                zIndex: 0,
                pointerEvents: 'none'
            }}
        >
            <Particles
                particleColors={["#ffffff"]}
                particleCount={400}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={70}
                moveParticlesOnHover
                alphaParticles={false}
                disableRotation={false}
                pixelRatio="1"
            />
        </div>
    )
}

export default Background