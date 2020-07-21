package handlers

import (
	echo "github.com/labstack/echo/v4"
)

// StartServer launches the echo framework
func StartServer(e *echo.Echo, address string) {
	Routes(e)

	e.Logger.Fatal(e.Start(address))
}
