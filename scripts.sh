#!/bin/bash
# used for docker users
# exports default postgres values for connection
# starts a postgres container with default values

# make sure scripts.sh is executable: chmod +x scripts.sh
# usage: ./scripts.sh [export|docker]

case "$1" in
  # export default postgres values for connection
  "export")
  echo "exporting postgres variables";
  export PGHOST="localhost";
  export PGUSER="postgres";
  export PGPASSWORD="root";
  ;;
  # create postgres docker container
  "docker")
  echo "creating postgres docker";
  docker run --name postgres \
    -e POSTGRES_PASSWORD=root \
    -d \
    -p 5432:5432 \
    postgres
  ;;
"*")
  echo "No argument specified. exiting.";
  exit 1;
  ;;
esac
