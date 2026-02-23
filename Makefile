

# Variables
PNPM := pnpm

# Colors
RESET := \033[0m
BOLD := \033[1m
GREEN := \033[32m
YELLOW := \033[33m
BLUE := \033[34m
CYAN := \033[36m

.PHONY: help dev build start lint format test

.DEFAULT_GOAL := help

help:
	@echo -e "$(BOLD)Available commands:$(RESET)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-15s$(RESET) %s\n", $$1, $$2}'
	@echo ""

# Development commands
dev: ## Start development server with watch mode
	@echo "$(BLUE)Starting development server...$(RESET)"
	@$(PNPM) run dev -p 3001
build: ## Build the project for production
	@echo "$(GREEN)Building the project...$(RESET)"
	@$(PNPM) run build
start: ## Start the production server
	@echo "$(CYAN)Starting production server...$(RESET)"
	@$(PNPM) run start
lint: ## Lint the codebase
	@echo "$(YELLOW)Linting the codebase...$(RESET)"
	@$(PNPM) run lint
format: ## Format the codebase
	@echo "$(YELLOW)Formatting the codebase...$(RESET)"
	@$(PNPM) run format
test: ## Run tests
	@echo "$(GREEN)Running tests...$(RESET)"
	@$(PNPM) run test
.PHONY: dev build start lint format test