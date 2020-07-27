FROM golang:1.14.4 as builder

WORKDIR /app
COPY go.mod .
COPY go.sum .
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build cmd/app/main.go

FROM alpine
RUN apk add --no-cache ca-certificates
COPY --from=builder /app/main /app/main
EXPOSE 5000
ENTRYPOINT [ "/app/main" ]