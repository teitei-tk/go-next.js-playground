package main

import (
	"fmt"
	"log"

	echo "github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"

	"github.com/teitei-tk/go-next.js-playground/backend"
	"github.com/teitei-tk/go-next.js-playground/backend/handlers"
)

func main() {
	s, err := backend.NewServerEnv()
	if err != nil {
		log.Fatal(err)
	}
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	addr := fmt.Sprintf("%s:%d", s.Host, s.Port)
	handlers.StartServer(e, addr)
}
