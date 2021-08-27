package pdf

import (
	"bytes"
	"fmt"

	"github.com/ledongthuc/pdf"
)

func ExctractAll(path string) (string, error) {
	_, s, err := readPdf(path)
	fmt.Println(s)
	return s, err
}

func readPdf(path string) (int64, string, error) {
	f, r, err := pdf.Open(path)
	if f != nil {
		defer f.Close()
	}
	if err != nil {
		return 0, "", err
	}
	var buf bytes.Buffer
	b, err := r.GetPlainText()
	if err != nil {
		return 0, "", err
	}
	n, err := buf.ReadFrom(b)
	if err != nil {
		return 0, "", err
	}
	return n, buf.String(), nil
}
