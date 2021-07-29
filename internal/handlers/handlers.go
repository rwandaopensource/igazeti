package handlers

import "net/http"

func Handler() http.Handler {
	mux := http.DefaultServeMux
	mux.Handle("/", http.NotFoundHandler())
	return http.HandlerFunc(mux.ServeHTTP)
}
