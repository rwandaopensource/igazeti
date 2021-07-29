package main

import (
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/rwandaopensource/igazeti/internal/handlers"
)

func main() {
	server := http.Server{
		Addr:              ":https",
		ReadHeaderTimeout: time.Second,
		Handler:           handlers.Handler(),
	}
	go func() {
		err := server.ListenAndServe()
		if err != nil && err != http.ErrServerClosed {
			log.Println(err)
		}
	}()
	sig := make(chan os.Signal, 2)
	signal.Notify(sig, syscall.SIGINT, syscall.SIGTERM)
}
