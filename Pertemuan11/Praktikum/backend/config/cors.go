package config

var allowedOrigins = []string{
	"https://indrariksa.github.io",
	"http://localhost:5173",
}

func GetAllwedOrigins() []string {
	return allowedOrigins
}
