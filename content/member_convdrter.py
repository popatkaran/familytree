import os
import yaml
import json
import uuid

def generate_uuid():
    """Generate a 32 character long UUID."""
    return str(uuid.uuid4())

def read_yaml_files(directory):
    """Read multiple YAML files from a directory and return a list of records."""
    records = []
    for filename in os.listdir(directory):
        if filename.endswith('.yaml') or filename.endswith('.yml'):
            with open(os.path.join(directory, filename), 'r') as file:
                try:
                    data = yaml.safe_load(file)
                    data['uuid'] = generate_uuid()  # Add UUID to each record
                    records.append(data)
                except yaml.YAMLError as e:
                    print(f"Error reading {filename}: {e}")
    return records

def write_to_json(records, output_file):
    """Write the list of records to a JSON file."""
    with open(output_file, 'w') as json_file:
        json.dump(records, json_file, indent=4)

if __name__ == "__main__":
    directory = "./members"  # Replace with the path to your YAML files directory
    output_file = "members.json"  # The output JSON file

    # Read YAML files from the directory and get the list of records
    records = read_yaml_files(directory)

    # Write all records to the JSON file
    write_to_json(records, output_file)

    print(f"JSON file {output_file} created successfully with {len(records)} records.")

