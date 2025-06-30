package config

var allowedOrigins = []string{
	"https://indrariksa.github.io",
	"http://localhost:5173",
	"http://127.0.0.1:8088/",
}

func GetAllwedOrigins() []string {
	return allowedOrigins
}
