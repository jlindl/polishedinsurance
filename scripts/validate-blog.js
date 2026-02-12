const fs = require('fs');
const path = require('path');

// Configuration
const BLOG_FILE = path.join(__dirname, '../lib/blog.ts');
const PUBLIC_DIR = path.join(__dirname, '../public');

// Regex to find image paths in the blog.ts file
// Matches: image: "/blog/..."
const IMAGE_REGEX = /image:\s*["']([^"']+)["']/g;

function validateBlogImages() {
    console.log('🔍 Validating blog images...');

    if (!fs.existsSync(BLOG_FILE)) {
        console.error(`❌ Blog file not found: ${BLOG_FILE}`);
        process.exit(1);
    }

    const content = fs.readFileSync(BLOG_FILE, 'utf8');
    let match;
    let missingCount = 0;
    let foundCount = 0;

    while ((match = IMAGE_REGEX.exec(content)) !== null) {
        const imagePath = match[1];
        const fullPath = path.join(PUBLIC_DIR, imagePath);

        if (fs.existsSync(fullPath)) {
            // console.log(`✅ Found: ${imagePath}`);
            foundCount++;
        } else {
            console.error(`❌ MISSING: ${imagePath}`);
            missingCount++;
        }
    }

    console.log('---');
    console.log(`Results: ${foundCount} found, ${missingCount} missing.`);

    if (missingCount > 0) {
        console.error('❌ Validation FAILED. Please add the missing images.');
        process.exit(1);
    } else {
        console.log('✅ Validation PASSED. All blog images exist.');
    }
}

validateBlogImages();
