package main

import (
	"fmt"
	"inibackend/config"
	"inibackend/router"
	"log"
	"os"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
)

func init() {
	// Load file .env saat program dijalankan
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Gagal memuat file .env")
	}
}

func main() {
	app := fiber.New()

	// Logging request
	app.Use(logger.New())

	// Basic CORS
	app.Use(cors.New(cors.Config{
		AllowOrigins:     strings.Join(config.GetAllwedOrigins(), ","),
		AllowCredentials: true,
		AllowMethods:     "GET,POST,PUT,DELETE,OPTIONS",
	}))

	// Setup router
	router.SetupRoutes(app)

	// 404 handler
	app.Use(func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Endpoint not found",
		})
	})

	// Baca PORT dari environment variable
	port := os.Getenv("PORT")
	if port == "" {
		port = "8088" // default port kalau tidak ada
	}

	log.Printf("Server is running at http://localhost:%s", port)
	if err := app.Listen(":" + port); err != nil {
		log.Fatalf("Error starting server: %v", err)
	}
}

// package main

// import (
// 	"aidanwoods.dev/go-paseto"
// 	"fmt"
// )

// func main() {
// 	privateKey := paseto.NewV4AsymmetricSecretKey()
// 	publicKey := privateKey.Public()

// 	fmt.Println("Private Key (hex):", privateKey.ExportHex())
// 	fmt.Println("Public Key (hex):", publicKey.ExportHex())
// }