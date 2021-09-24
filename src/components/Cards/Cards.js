import React from 'react'
import pdfIcon from '../../assets/pdf.png';
import excelIcon from '../../assets/excel.png';
import imageIcon from '../../assets/image.png';
import pptIcon from '../../assets/ppt.png';
import wordIcon from '../../assets/word.png';
import Card from './Card';

const Cards = () => {
    const cards = [
        {
            title: 'Merge PDF',
            descripion: 'Combine multiple PDF\'s into one unified documents ',
            icon: pdfIcon,
            link: 'merge-pdf'
        },
        {
            title: 'Split PDF',
            descripion: 'Extract pages from your PDF or save each pages as a seperate PDF ',
            icon: pdfIcon,
            link: 'split-pdf'
        },
        {
            title: 'Compress PDF',
            descripion: 'Compress your PDF',
            icon: pdfIcon,
            link: 'compress-pdf'
        },
        {
            title: 'Image to PDF',
            descripion: 'Transform JPG, PNG, GIF, and BMP to PDF',
            icon: imageIcon,
            link: 'image-to-pdf'
        },
        {
            title: 'Word to PDF',
            descripion: 'Convert Word document to PDF Files',
            icon: wordIcon,
            link: 'word-to-pdf'
        },
        {
            title: 'PPT to PDF',
            descripion: 'Convert PowerPoint presentation to PDF documents',
            icon: pptIcon,
            link: 'ppt-to-pdf'
        },
        {
            title: 'Excel to PDF',
            descripion: 'Convert Excel spreadsheets to PDF documents',
            icon: excelIcon,
            link: 'excel-to-pdf'
        },
        {
            title: 'PDF to Word',
            descripion: 'Convert PDF document to Word documents',
            icon: pdfIcon,
            link: 'pdf-to-word'
        },
        {
            title: 'PDF to PPT',
            descripion: 'Convert PDF documents to PowerPoint presentation',
            icon: pdfIcon,
            link: 'pdf-to-ppt'
        },
        {
            title: 'PDF to Excel',
            descripion: 'Convert PDF documents to Excel spreadsheets',
            icon: pdfIcon,
            link: 'pdf-to-excel'
        },
      
    ]
    return (
        <div className="mt-28 flex items-center justify-center" >
            <div className="mx-4 xl:mx-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    cards.map(card => {
                        return (
                            <Card key={card.title} card={card} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards
