$projectDir = if ($PSScriptRoot) { $PSScriptRoot } else { (Get-Location).Path }

Write-Host "=== VERIFYING NURSING NOTEBOOK PROJECT ===" -ForegroundColor Cyan

# 1. Check all required files exist
$requiredFiles = @("data.js", "app.js", "style.css", "index.html", "about.html", "exam-system.html")
foreach ($f in $requiredFiles) {
    $fullPath = Join-Path $projectDir $f
    if (Test-Path $fullPath) {
        $size = (Get-Item $fullPath).Length
        Write-Host "[PASS] File exists: $f ($size bytes)" -ForegroundColor Green
    } else {
        Write-Host "[FAIL] Missing file: $f" -ForegroundColor Red
    }
}

# 2. Check data.js contents
$dataContent = Get-Content (Join-Path $projectDir "data.js") -Raw
$writtenCount = ([regex]::Matches($dataContent, "written:")).Count
$mcqCount = ([regex]::Matches($dataContent, "mcq:")).Count
$totalPapers = $writtenCount + $mcqCount

Write-Host "`n=== DATA.JS PAPER COUNTS ===" -ForegroundColor Cyan
Write-Host "Written papers found: $writtenCount"
Write-Host "MCQ papers found: $mcqCount"
Write-Host "Total paper links: $totalPapers (Expected: 91)"

if ($totalPapers -eq 91 -and $writtenCount -eq 49 -and $mcqCount -eq 42) {
    Write-Host "[PASS] Paper count is exactly 91 (49 written + 42 mcq)" -ForegroundColor Green
} else {
    Write-Host "[FAIL] Paper count mismatch!" -ForegroundColor Red
}

# 3. Check 2018 MCQ absence
$has2018Mcq = $dataContent -match '"2018"\s*:\s*\{[^}]*mcq:'
if (-not $has2018Mcq) {
    Write-Host "[PASS] 2018 has NO MCQ links (Written only)" -ForegroundColor Green
} else {
    Write-Host "[FAIL] 2018 contains MCQ links!" -ForegroundColor Red
}

# 4. Check all 25 subject codes
$expectedCodes = @(
    "B111", "B112", "B113", "B124", "B125", "B126", "B137", # 1st Year (7)
    "B231", "B232", "B233", "B224", "B235", "B226", "B237", # 2nd Year (7)
    "B331", "B332", "B333", "B334", "B335",                   # 3rd Year (5)
    "B431", "B432", "B433", "B434", "B435", "B416"            # 4th Year (6)
)

Write-Host "`n=== VERIFYING ALL 25 SUBJECT CODES ===" -ForegroundColor Cyan
$missingCodes = @()
foreach ($code in $expectedCodes) {
    if ($dataContent -notmatch "code:\s*`"$code`"") {
        $missingCodes += $code
    }
}

if ($missingCodes.Count -eq 0) {
    Write-Host "[PASS] All 25 subject codes exist in data.js" -ForegroundColor Green
} else {
    Write-Host "[FAIL] Missing subject codes: $($missingCodes -join ', ')" -ForegroundColor Red
}

# 5. Check CSS colors according to PRD
$cssContent = Get-Content (Join-Path $projectDir "style.css") -Raw
$expectedColors = @(
    "#0F5C5E", # Primary Teal
    "#08494B", # Dark Teal
    "#DDE9E1", # Soft Sage
    "#C5D8CE", # Sage Hover
    "#F8F6F0", # Ivory
    "#FFFFFF", # White
    "#D8E1DC", # Border
    "#172426", # Text
    "#647274"  # Muted Text
)

Write-Host "`n=== VERIFYING CSS COLOR PALETTE ===" -ForegroundColor Cyan
$missingColors = @()
foreach ($color in $expectedColors) {
    if ($cssContent -notmatch [regex]::Escape($color)) {
        $missingColors += $color
    }
}

if ($missingColors.Count -eq 0) {
    Write-Host "[PASS] All 9 PRD required color codes present in style.css" -ForegroundColor Green
} else {
    Write-Host "[FAIL] Missing colors in style.css: $($missingColors -join ', ')" -ForegroundColor Red
}

# 6. Check fonts
if ($cssContent -match "Lora" -and $cssContent -match "Inter") {
    Write-Host "[PASS] Lora (headings) and Inter (body/UI) defined in style.css" -ForegroundColor Green
} else {
    Write-Host "[FAIL] Typography mismatch in style.css" -ForegroundColor Red
}

# 7. Check all 25 animated subject icons in app.js
$appContent = Get-Content (Join-Path $projectDir "app.js") -Raw
Write-Host "`n=== VERIFYING ANIMATED SUBJECT CARDS IN APP.JS ===" -ForegroundColor Cyan
$missingIcons = @()
foreach ($code in $expectedCodes) {
    if ($appContent -notmatch "$code\s*:\s*'") {
        $missingIcons += $code
    }
}

if ($missingIcons.Count -eq 0) {
    Write-Host "[PASS] All 25 subjects have dedicated animated vector icons in app.js" -ForegroundColor Green
} else {
    Write-Host "[FAIL] Missing animated icons for: $($missingIcons -join ', ')" -ForegroundColor Red
}

if ($appContent -match "subject-animated-hero-card" -and $appContent -match "subject-animated-icon") {
    Write-Host "[PASS] Subject detail view animated hero card and subject animated icons integrated" -ForegroundColor Green
} else {
    Write-Host "[FAIL] Missing subject detail animation integration" -ForegroundColor Red
}

Write-Host "`n=== ALL VERIFICATIONS COMPLETE ===" -ForegroundColor Cyan
