// https://editor.p5js.org/jht9629-nyu/sketches/vSZ72ZQ0Y
// https://editor.p5js.org/bm2699/sketches/FIeiCFGTb
// ICM Final - Beatrice Mai

let posterImage;
let wbeechImage, redbudImage, survivorImage;
let currentHover = null;
let hoverEffects = {};  // Store animation states for each zone

// Define hover zones with specific coordinates and content
const hoverZones = [
    {
        id: 'top',
        x: 400,
        y: 400,
        radius: 30,
        title: "What is a Great Tree?",
        content: "NYC Parks judges Great Trees based on Historic Significance, Ecological Significance, or Cultural Significance to determine if a nominated tree can join the initiative."
    },
    {
        id: 'leafy',
        x: 400,
        y: 620,
        radius: 40,
        title: "Botanical Significance",
        content: "Great Trees may be rare species or varieties, remnants of historic or native ecosystems, trees with profound form or structure, or unique in other aesthetic or scientific ways.",
        image: 'weepingbeech.jpg',
        story: "The Weeping Beech, landmarked for its significance, thrived in this park from 1847 to 1998, living 151 years. Originating from a nobleman's estate in Beersal, Belgium, it was brought to New York by horticulturist Samuel Bowne Parsons (1819–1907), who planted it at his renowned nursery. The tree matured to 60 feet tall with an 80-foot-wide 'leaf curtain.' Its branches re-rooted to form a ring of offspring, earning it a legendary status as the progenitor of America's Weeping Beeches (Fagus sylvatica)."
    },
    {
        id: 'trunk',
        x: 400,
        y: 800,
        radius: 35,
        title: "Cultural Significance",
        content: "Some trees may have a strong association with a belief, person, place, or event of cultural importance to a community, reflect cultural expressions, or appear in works of art.",
        image: 'redbud.jpg',
        story: "This eastern redbud near the playground at Msgr. McGolrick Park has a striking umbrella-like shape with low, flexible branches that often attract climbing children. Bursting with pink buds in spring and showcasing its unique structure in autumn, it's a living tribute to nature's whimsy. Positioned along a main path, it regularly captivates pedestrians. Legend has it the tree came to the park through a gardener's arrangement with Prospect Park to adopt their surplus trees—an underdog tale in full bloom."
    },
    {
        id: 'roots',
        x: 400,
        y: 1000,
        radius: 35,
        title: "Historic Significance",
        content: "Trees bear witness to many important historical moments across our city reflecting the diversity and lived experiences of New Yorkers.",
        image: 'survivortree.jpeg',
        story: "In October 2001, a callery pear tree was discovered in the rubble of the World Trade Center, damaged but alive. Transported to the Arthur Ross Nursery, it was nurtured by NYC Parks staff, growing from eight to over 30 feet tall. Renamed the 'Survivor Tree,' it was replanted at the Memorial Plaza on December 22, 2010, as a lasting symbol of resilience."
    }
];

function preload() {
    posterImage = loadImage('icmposter.jpg');
    wbeechImage = loadImage('weepingbeech.jpg');
    redbudImage = loadImage('redbud.jpg');
    survivorImage = loadImage('survivortree.jpeg');
}

function setupHoverEffects() {
    hoverZones.forEach(zone => {
        hoverEffects[zone.id] = {
            pulseSize: zone.radius,
            ripples: [],
            lastRippleTime: 0
        };
    });
}

function setup() {
    createCanvas(800, 1400);
    textAlign(LEFT, TOP);
    setupHoverEffects();
}

function drawHoverEffect(zone) {
    let effect = hoverEffects[zone.id];
    
    // Pulsing animation calculation
    let pulseSpeed = 0.05;
    let pulseRange = 5;
    effect.pulseSize = zone.radius + sin(frameCount * pulseSpeed) * pulseRange;
    
    push();
    blendMode(SCREEN);  // This helps create the glowing effect
    
    // Draw multiple layers of circles with decreasing opacity for glow effect
    for (let i = 0; i < 8; i++) {
        let size = effect.pulseSize * (1 + i * 0.2);
        let alpha = map(i, 0, 7, 100, 0);
        noFill();
        stroke(188, 140, 140, alpha);
        strokeWeight(1);
        circle(zone.x, zone.y, size * 2);
    }
    
    // Inner glow
    for (let i = 0; i < 5; i++) {
        let size = effect.pulseSize * (1 - i * 0.1);
        let alpha = map(i, 0, 4, 80, 0);
        fill(188, 140, 140, alpha);
        noStroke();
        circle(zone.x, zone.y, size * 2);
    }
    
    // Ripple effect with glow
    effect.ripples = effect.ripples.filter(ripple => {
        ripple.size += 1;
        ripple.alpha -= 1.5;
        
        if (ripple.alpha > 0) {
            // Draw multiple layers for each ripple
            for (let i = 0; i < 3; i++) {
                let rippleAlpha = ripple.alpha * map(i, 0, 2, 1, 0.3);
                stroke(188, 140, 140, rippleAlpha);
                strokeWeight(1.5 - i * 0.5);
                circle(zone.x, zone.y, (ripple.size + i * 5) * 2);
            }
            return true;
        }
        return false;
    });
    
    // Create new ripples less frequently
    if (millis() - effect.lastRippleTime > 2000) {
        effect.ripples.push({
            size: zone.radius,
            alpha: 60
        });
        effect.lastRippleTime = millis();
    }
    
    // Add subtle rotating particles with glow
    let numParticles = 12;
    for (let i = 0; i < numParticles; i++) {
        let angle = frameCount * 0.02 + (TWO_PI * i) / numParticles;
        let x = zone.x + cos(angle) * effect.pulseSize;
        let y = zone.y + sin(angle) * effect.pulseSize;
        
        // Draw glowing particles
        for (let j = 0; j < 3; j++) {
            let particleSize = 3 - j;
            let particleAlpha = map(j, 0, 2, 150, 30);
            fill(188, 140, 140, particleAlpha);
            noStroke();
            circle(x, y, particleSize * 2);
        }
    }
    
    // Central glow
    let centerGlow = 40 + sin(frameCount * 0.08) * 20;
    fill(188, 140, 140, centerGlow);
    noStroke();
    circle(zone.x, zone.y, effect.pulseSize);
    
    pop();
}
function drawInfoPanel(zone) {
    const panelWidth = 300;
    const padding = 20;
    const imageHeight = 180;
    
    // Better height calculations for text
    let titleHeight = 30;
    let contentHeight = ceil(textWidth(zone.content) / (panelWidth - padding * 2)) * 20;
    let storyHeight = zone.story ? ceil(textWidth(zone.story) / (panelWidth - padding * 2)) * 16 : 0;
    
    // Calculate total panel height
    let panelHeight = padding * 2 + titleHeight + contentHeight;
    if (zone.image) {
        panelHeight += imageHeight + padding + storyHeight + padding;
    }
    
    // Position panel
    let startX = mouseX + 20;
    let startY = mouseY + 20;
    
    // Adjust panel position if it would go off screen
    if (startX + panelWidth > width) {
        startX = mouseX - panelWidth - 20;
    }
    if (startY + panelHeight > height) {
        startY = mouseY - panelHeight - 20;
    }
    
    // Draw panel background with guaranteed margins
    fill(255, 250, 245, 240);
    stroke(188, 140, 140);
    strokeWeight(1);
    rect(startX, startY, panelWidth, panelHeight, 10);
    
    // Draw title
    noStroke();
    fill(60, 60, 60);
    textSize(16);
    textStyle(BOLD);
    text(zone.title, startX + padding, startY + padding);
    textStyle(NORMAL);
    
    // Draw main content
    textSize(13);
    let currentY = startY + padding + titleHeight;
    text(zone.content, startX + padding, currentY, panelWidth - padding * 2);
    currentY += contentHeight + padding;
    
    // Draw image and story if available
    if (zone.image) {
        let img;
        switch(zone.id) {
            case 'leafy':
                img = wbeechImage;
                break;
            case 'trunk':
                img = redbudImage;
                break;
            case 'roots':
                img = survivorImage;
                break;
        }
        
        if (img) {
            // Calculate image dimensions
            let imgWidth = panelWidth - padding * 2;
            let imgHeight = (img.height * imgWidth) / img.width;
            if (imgHeight > imageHeight) {
                imgHeight = imageHeight;
                imgWidth = (img.width * imgHeight) / img.height;
            }
            
            // Center the image
            let imgX = startX + padding + (panelWidth - padding * 2 - imgWidth) / 2;
            
            // Draw image with proper spacing
            image(img, imgX, currentY, imgWidth, imgHeight);
            currentY += imgHeight + padding;
            
            // Draw story text
            textSize(11);
            text(zone.story, startX + padding, currentY, panelWidth - padding * 2);
        }
    }
}

function draw() {
    image(posterImage, 0, 0, width, height);
    
    // Check hover zones
    currentHover = null;
    for (let zone of hoverZones) {
        let d = dist(mouseX, mouseY, zone.x, zone.y);
        if (d < zone.radius) {
            currentHover = zone;
            drawHoverEffect(zone);
            break;
        }
    }
    
    // Display information panel if hovering
    if (currentHover) {
        drawInfoPanel(currentHover);
    }
}

// Helper function for positioning
function mousePressed() {
    console.log(`Clicked at: x: ${mouseX}, y: ${mouseY}`);
}