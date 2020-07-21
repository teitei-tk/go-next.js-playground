package handlers

import echo "github.com/labstack/echo/v4"

// Routes manage the routing of applications
func Routes(e *echo.Echo) {
	e.GET("/", RootIndex)
}
