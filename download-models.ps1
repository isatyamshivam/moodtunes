$modelFiles = @(
    "face_expression_model-shard1",
    "face_expression_model-weights_manifest.json",
    "tiny_face_detector_model-shard1",
    "tiny_face_detector_model-weights_manifest.json"
)

$baseUrl = "https://raw.githubusercontent.com/vladmandic/face-api/master/model/"
$outputDir = ".\public\models"

if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir
}

foreach ($file in $modelFiles) {
    $url = $baseUrl + $file
    $output = Join-Path $outputDir $file
    Write-Host "Downloading $file..."
    Invoke-WebRequest -Uri $url -OutFile $output
}