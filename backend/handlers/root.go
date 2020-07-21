package handlers

import (
	"net/http"

	echo "github.com/labstack/echo/v4"
)

// RootIndexResponse is a structure that returns the root path response
type RootIndexResponse struct {
	Result bool `json:"result"`
}

// RootIndex is RenderRootIndexReponse JSON
func RootIndex(c echo.Context) error {
	r := &RootIndexResponse{
		Result: true,
	}

	return c.JSON(http.StatusOK, r)
}
