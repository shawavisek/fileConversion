#python script to convert pdf file to text file

import PyPDF2


#loading the pdf file
pdffile = "./files/pdf/content.pdf"


#function to extract the content of our pdf file
def convertToText(pdf):
    pdfFile = PyPDF2.PdfFileReader(pdf)

    #location to store our text file
    with open('./files/text/content.txt',"w") as f:
        for page in range(pdfFile.getNumPages()):
            data = pdfFile.getPage(page).extractText()
            f.write(data)

convertToText(pdffile) 