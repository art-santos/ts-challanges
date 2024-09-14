for dir in */ ; do
    # Remove the number from the file name inside each directory
    for file in "$dir"*.ts; do
        new_name=$(echo "$file" | sed 's/[0-9]*_//')
        mv "$file" "${dir}${new_name}"
    done
    # Add __tests__ directory if not exists
    mkdir -p "${dir}__tests__"
done
