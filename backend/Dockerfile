FROM rust:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy the Cargo files to cache dependencies
COPY Cargo.toml Cargo.lock ./

# Build dependencies to cache them
RUN cargo build --release || true

# Copy the application source code
COPY . .

# Build the final application
RUN cargo build --release

# Ensure the binary is executable
RUN chmod +x ./target/release/quit-for-greater-good

# Expose the server's port
EXPOSE 8080

# Run the application
CMD ["./target/release/quit-for-greater-good"]
