export const getDirection ={   
    'imagetopdf':{
        componentMetadata:{
            title : 'Image to PDF',
            subtitle : 'Convert your JPG, JPEG, PNG, BITMAP to PDF online',
            fileType : 'image/*',
            color :'indigo'
        },
        apiMetaData:{
            APIRequestBody :{
                from: 'image',
                to: 'pdf',
                fromType : 'png',
                toType :'pdf',
            }
        }
    },
    'pdftoimage':{
        componentMetadata:{
            title: "PDF to Image",
            subtitle: "Convert your PDF into Images",
            fileType: ".pdf",
            color: "red",
        },
        apiMetaData:{
            APIRequestBody : {
                from: 'pdf',
                to: 'image',
                fromType : 'pdf',
                toType :'png',
            }
        }
    },
    'wordtopdf':{
        componentMetadata:{
            title: "Word to PDF",
            subtitle: "Convert your DOC to PDF online.",
            fileType: ".doc,.docx",
            color: "blue",
        },
        apiMetaData:{
            APIRequestBody : {
                from: 'office',
                to: 'pdf',
                fromType : 'word',
                toType :'pdf',
            }
        }
    },
    'exceltopdf':{
        componentMetadata:{
            title:"Excel to PDF",
            subtitle:"Convert your Excel File to PDF online.",
            fileType:".xls,.xlsx",
            color:"green",
        },
        apiMetaData:{
            APIRequestBody:{
                from: 'office',
                to: 'pdf',
                fromType : 'excel',
                toType :'pdf',
            }
        }
    },
    'ppttopdf':{
        componentMetadata:{
            title:"PowerPoint Presentation to PDF",
            subtitle:"Convert your PowerPoint Presentation to PDF online.",
            fileType:".ppt",
            color:"yellow",
        },
        apiMetaData:{
            APIRequestBody:{
                from: 'office',
                to: 'pdf',
                fromType : 'ppt',
                toType :'pdf',
            }
        }
    },
    'pdftoword':{
        componentMetadata:{
            title:"PDF to Word",
            subtitle:"Convert yout PDF into ExcelSheet.",
            fileType:".pdf",
            color:"red",
        },
        apiMetaData:{
            APIRequestBody:{
                from: 'pdf',
                to: 'office',
                fromType : 'pdf',
                toType :'excel',
            }
        }
    },
    'pdftoexcel':{
        componentMetadata:{
            title:"PDF to Excel",
            subtitle:"Convert yout PDF into Excel Sheet.",
            fileType:".pdf",
            color:"red",
        },
        apiMetaData:{
            APIRequestBody:{
                from: 'pdf',
                to: 'office',
                fromType : 'pdf',
                toType :'excel',
            }
        }
    },
    'pdftoppt':{
        componentMetadata:{
            title:"PDF to PPT",
            subtitle:"Convert yout PDF into PowerPoint Presentation.",
            fileType:".pdf",
            color:"red",
        },
        apiMetaData:{
            APIRequestBody:{
                from: 'pdf',
                to: 'office',
                fromType : 'pdf',
                toType :'ppt',
            }
        }
    }
}