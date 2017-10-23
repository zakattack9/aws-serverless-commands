// creating boilerplate for serverless
// serverless create --template aws-nodejs

// testing lambda functions
// serverlesss invoke local -f function -p test.json
// *In the command above, "function" is the name of the function to run, and "test.json" is the JSON file of which the data is put in

// creating a bucket in aws
// aws s3api create-bucket --bucket test_bucket_zak --region us-west-2 --acl public-read --create-bucket-configuration LocationConstraint=us-west-2

// list all buckets in aws
// aws s3api list-buckets

// upload files to bucket
// aws s3 cp /c/Users/Student/Downloads/google.png s3://test-bucket-zak --acl public-read

// changes bucket to static webpage
// aws s3 website s3://test-bucket-zak/ --index-document index.html --error-document error.html

// publish page
// curl http://test-bucket-zak.s3-websites-us-west-2.amazonaws.com
