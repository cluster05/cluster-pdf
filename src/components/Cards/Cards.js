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
            from: pdfIcon,
            to: pdfIcon,
            link: 'merge-pdf'
        },
        {
            title: 'Split PDF',
            descripion: 'Extract pages from your PDF or save each pages as a seperate PDF ',
            from: pdfIcon,
            to: pdfIcon,
            link: 'split-pdf'
        },

        {
            title: 'Word to PDF',
            descripion: 'Convert Word document to PDF Files',
            from: wordIcon,
            to: pdfIcon,
            link: 'word-to-pdf'
        },
        {
            title: 'PPT to PDF',
            descripion: 'Convert PowerPoint presentation to PDF documents',
            from: pptIcon,
            to: pdfIcon,
            link: 'ppt-to-pdf'
        },
        {
            title: 'Excel to PDF',
            descripion: 'Convert Excek spreadsheets to PDF documents',
            from: excelIcon,
            to: pdfIcon,
            link: 'excel-to-pdf'
        },
        {
            title: 'Image to PDF',
            descripion: 'Transform JPG, PNG, GIF, and BMP to PDF',
            from: imageIcon,
            to: pdfIcon,
            link: 'image-to-pdf'
        },
    ]
    return (
        <div className="mt-28 flex items-center justify-center" >
            <div className="mx-4 xl:mx-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    cards.map(card => {
                        return (
                            <Card card={card} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards
