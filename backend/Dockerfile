# Use the official Rust image as a base
FROM rust:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the Cargo files and source code
COPY Cargo.toml Cargo.lock ./
RUN cargo build --release || true
COPY . .

# Build the application
RUN cargo build --release

# Expose the application port
EXPOSE 8080

# Command to run the server
CMD ["./target/release/quit-for-greater-good"]
