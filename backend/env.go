package backend

import "github.com/kelseyhightower/envconfig"

type ServerEnv struct {
	Port int
	Host string
}

func NewServerEnv() (ServerEnv, error) {
	var s ServerEnv
	err := envconfig.Process("", &s)
	if err != nil {
		return s, err
	}

	return s, nil
}
