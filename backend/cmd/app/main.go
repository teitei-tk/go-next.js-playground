package main

import (
	"fmt"

	echo "github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"

	"github.com/teitei-tk/go-next.js-playground/backend/handlers"
)

func main() {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	ip := "0.0.0.0"
	port := 5000
	addr := fmt.Sprintf("%s:%d", ip, port)
	handlers.StartServer(e, addr)
}
