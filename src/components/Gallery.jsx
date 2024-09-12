import React, { useState } from 'react';
import { Card, Box, Typography, Button, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import image from '../assets/image.png';

const Gallery = () => {
    const [images, setImages] = useState([image, image, image]); 
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleAddImageClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            const newImages = Array.from(files).map(file => URL.createObjectURL(file));
            setImages(prevImages => [...prevImages, ...newImages]);
        }
    };

    const handlePreviousClick = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, images.length - 1));
    };

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: '95%', md: '720px' },
                backgroundColor: 'rgba(54, 60, 67, 1)',
                boxShadow: '5.67px 5.67px 3.78px rgba(0, 0, 0, 0.4)',
                padding: { xs: '12px', md: '17px 53px' },
                borderRadius: '20px',
                boxSizing: 'border-box',
                margin: 'auto',
                mt: { xs: '20px', md: '41px' },
                position: 'relative',
            }}
        >
            
               <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    width: '100%' 
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        backgroundColor: '#191B1F',
                        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                        padding: { xs: '10px 20px', md: '16px 38px' },
                        borderRadius: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant="h6"
                        color="white"
                        sx={{ textAlign: 'center', fontSize: { xs: '0.8rem', md: '1.25rem' }, fontFamily: 'Poppins' }}
                    >
                        Gallery
                    </Typography>

                    <HelpOutlineIcon
                        sx={{
                            position: 'absolute',
                            left: '-35px', 
                            top: '20px',
                            transform: 'translateY(-50%)', 
                            color: 'rgba(163, 173, 178, 1)',
                        }}
                    />
                </Box>

                <Box sx={{ display: 'flex', gap: '12px' }}>
                    <Button
                        onClick={handleAddImageClick}
                        sx={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '20px',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#333',
                            },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '6px 12px',
                        }}
                    >
                        <AddIcon />
                        <Typography
                            variant="body1"
                            sx={{ marginLeft: '8px', fontSize: { xs: '0.6rem', md: '0.7rem' }, fontFamily: 'Plus Jakarta Sans' }}
                        >
                            Add Image
                        </Typography>
                    </Button>

                    <Fab
                        onClick={handlePreviousClick}
                        sx={{
                            backgroundColor: '#191B1F',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#333',
                            },
                        }}
                    >
                        <ArrowBackIcon />
                    </Fab>

                    <Fab
                        onClick={handleNextClick}
                        sx={{
                            backgroundColor: '#191B1F',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#333',
                            },
                        }}
                    >
                        <ArrowForwardIcon />
                    </Fab>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: '20px',
                    width: '100%',
                    overflowX: 'hidden',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        transition: 'transform 0.3s ease-in-out',
                        transform: `translateX(-${currentIndex * 100}%)`,
                        gap: '21px',
                    }}
                >
                    {images.map((img, index) => (
                        <Box
                            key={index}
                            component="img"
                            src={img}
                            alt={`Gallery Image ${index + 1}`}
                            sx={{
                                width: '190px',
                                height: '179px',
                                borderRadius: '24px',
                                objectFit: 'cover',
                                mb: '16px',
                            }}
                        />
                    ))}
                </Box>
            </Box>

            <input
                type="file"
                id="fileInput"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
        </Card>
    );
};

export default Gallery;