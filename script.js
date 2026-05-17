document.addEventListener("DOMContentLoaded", () => {
    const state = {
        productType: "box",
        material: "rigid",
        finish: "matte",
        gradient: "grid-dark",
        glow: false,
        angle: -12,
        scale: 1,
        rotation: 0,
        cornerFit: 10,
        effectIntensity: 50,
        transparentExport: false,
        zoom: 1,
        opacity: 1,
        perspectiveFit: 0,
        shadow: 45,
        reflection: 38,
        ambient: 54,
        glowIntensity: 36,
        x: 0,
        y: 0,
        backgroundColor: "#101010",
        uploadedImage: "",
        uploadedName: "",
        artworkAspect: 1,
        printZone: "lid",
        blendMode: "normal",
        printEffect: "standard",
        assistantSuggestedType: "box"
    };

    const productsData = [
        {
            name: "Luxury Paper Bag",
            price: "₹18 - ₹35 / unit",
            moq: "MOQ - 500",
            desc: "Design-led paper bags for fashion, gifting, and premium retail presentation.",
            img: "assets/luxury_bag.png",
            colorClass: "text-neon-blue"
        },
        {
            name: "Magnetic Rigid Box",
            price: "₹120 - ₹280 / unit",
            moq: "MOQ - 500",
            desc: "Premium rigid boxes for beauty, gifting, and high-perception D2C launches.",
            img: "assets/magnetic_box.png",
            colorClass: "text-hot-pink"
        },
        {
            name: "Food Packaging Pouch",
            price: "₹8 - ₹20 / unit",
            moq: "MOQ - 500",
            desc: "Flexible pouches for F&B brands that need barrier performance and shelf impact.",
            img: "assets/food_pouch.png",
            colorClass: "text-neon-green"
        },
        {
            name: "Bottle Label Packaging",
            price: "₹3 - ₹10 / unit",
            moq: "MOQ - 500",
            desc: "Custom label packaging for beverages and product lines that need standout recall.",
            img: "assets/bottle_label.png",
            colorClass: "text-neon-blue"
        },
        {
            name: "Kraft Shopping Bag",
            price: "₹15 - ₹30 / unit",
            moq: "MOQ - 500",
            desc: "Low-MOQ kraft bags for retail, takeaway, and eco-conscious packaging programs.",
            img: "assets/kraft_bag.png",
            colorClass: "text-hot-pink"
        },
        {
            name: "Bottle Wrap Sleeve",
            price: "₹10 - ₹25 / unit",
            moq: "MOQ - 500",
            desc: "Bottle sleeves designed for stronger shelf storytelling and transport protection.",
            img: "assets/bottle_wrap.png",
            colorClass: "text-neon-green"
        }
    ];

    const processStages = [
        { title: "01. Brief & Packaging Audit", colorClass: "text-neon-blue", desc: "We map your category, brand identity, budget, quantity, and unboxing goals." },
        { title: "02. Brand & Audience Strategy", colorClass: "text-hot-pink", desc: "We define the structural direction, customer expectation, and packaging story." },
        { title: "03. Structural & Graphic Design", colorClass: "text-neon-green", desc: "Layouts, graphics, and production-ready mockups are built around your brand." },
        { title: "04. Dielines & Sample Development", colorClass: "text-neon-blue", desc: "Print files, prototypes, and refinements are prepared before manufacturing begins." },
        { title: "05. Manufacturer Matching", colorClass: "text-hot-pink", desc: "We align your order with vetted fast-turnaround partners across India." },
        { title: "06. Production Coordination", colorClass: "text-neon-green", desc: "Material decisions, quality checkpoints, and execution stay inside one workflow." },
        { title: "07. Delivery & Reorder Layer", colorClass: "gradient-text", desc: "Finished packaging ships fast, with room for replenishment and scale." }
    ];

    const trackingStages = [
        "Order Confirmed",
        "Packaging Design Started",
        "Material Procurement",
        "Manufacturing in Progress",
        "Quality Check",
        "Packaging Completed",
        "Dispatched",
        "Out for Delivery",
        "Delivered"
    ];

    const trackingProducts = [
        {
            product: "Magnetic Rigid Box",
            quantity: "2,500 Units",
            material: "Rigid Board + Wrap",
            dimensions: "240 x 180 x 80 mm",
            finish: "Soft-touch Matte",
            specialist: "Packworks Design Team",
            facility: "Partner Network - Delhi / Mumbai / Bangalore"
        },
        {
            product: "Luxury Paper Bag",
            quantity: "4,000 Units",
            material: "Premium Art Paper",
            dimensions: "320 x 120 x 420 mm",
            finish: "Matte + Rope Handle",
            specialist: "Packworks Operations Team",
            facility: "Partner Network - Surat / Ahmedabad"
        },
        {
            product: "Food Packaging Pouch",
            quantity: "8,500 Units",
            material: "Multi-layer Flexible Laminate",
            dimensions: "160 x 240 x 70 mm",
            finish: "Gloss Barrier Finish",
            specialist: "Packworks Category Team",
            facility: "Partner Network - Delhi / Bangalore"
        },
        {
            product: "Bottle Wrap Sleeve",
            quantity: "6,000 Units",
            material: "Shrink Sleeve Film",
            dimensions: "65 x 210 mm",
            finish: "Gloss UV",
            specialist: "Packworks Production Team",
            facility: "Partner Network - Mumbai / Delhi"
        }
    ];

    const mockupAssets = {
        box: "assets/magnetic_box.png",
        bag: "assets/luxury_bag.png",
        pouch: "assets/food_pouch.png",
        wrap: "assets/bottle_wrap.png",
        label: "assets/bottle_label.png",
        kraft: "assets/kraft_bag.png"
    };

    const productGrid = document.getElementById("productGrid");
    const processGrid = document.getElementById("processGrid");
    const loader = document.getElementById("startup-loader");
    const navbar = document.getElementById("navbar");
    const revealElements = document.querySelectorAll("[data-reveal]");
    const statusModal = document.getElementById("statusModal");
    const statusStageList = document.getElementById("statusStageList");
    const statusTrackForm = document.getElementById("statusTrackForm");
    const statusDashboard = document.getElementById("statusDashboard");
    const mobileToggle = document.getElementById("mobileToggle");
    const navLinks = document.getElementById("navLinks");
    const assistantToggle = document.getElementById("assistantToggle");
    const assistantPanel = document.getElementById("assistantPanel");
    const assistantClose = document.getElementById("assistantClose");
    const assistantReply = document.getElementById("assistantReply");
    const studioPack = document.getElementById("studioPack");
    const artworkLayer = document.getElementById("artworkLayer");
    const uploadedProductPreview = document.getElementById("uploadedProductPreview");
    const uploadStatus = document.getElementById("uploadStatus");
    const mockupStage = document.getElementById("mockupStage");
    const studioShadow = document.getElementById("studioShadow");
    const mockupProductImage = document.getElementById("mockupProductImage");
    const mockupPreviewShell = document.getElementById("mockupPreviewShell");
    const mockupInfoType = document.getElementById("mockupInfoType");
    const mockupInfoMaterial = document.getElementById("mockupInfoMaterial");
    const mockupInfoDimensions = document.getElementById("mockupInfoDimensions");
    const productImageUpload = document.getElementById("productImageUpload");
    const printZoneSelect = document.getElementById("printZoneSelect");
    const blendModeSelect = document.getElementById("blendModeSelect");
    const printEffectSelect = document.getElementById("printEffectSelect");
    const bgColorPicker = document.getElementById("bgColorPicker");
    const hexInput = document.getElementById("hexInput");
    const rgbR = document.getElementById("rgbR");
    const rgbG = document.getElementById("rgbG");
    const rgbB = document.getElementById("rgbB");
    const dimLength = document.getElementById("dimLength");
    const dimWidth = document.getElementById("dimWidth");
    const dimHeight = document.getElementById("dimHeight");
    const artworkScale = document.getElementById("artworkScale");
    const artworkRotate = document.getElementById("artworkRotate");
    const cornerFit = document.getElementById("cornerFit");
    const effectIntensity = document.getElementById("effectIntensity");
    const studioZoom = document.getElementById("studioZoom");
    const studioAngle = document.getElementById("studioAngle");
    const artworkOpacity = document.getElementById("artworkOpacity");
    const perspectiveFit = document.getElementById("perspectiveFit");
    const shadowIntensity = document.getElementById("shadowIntensity");
    const reflectionStrength = document.getElementById("reflectionStrength");
    const ambientLighting = document.getElementById("ambientLighting");
    const glowIntensity = document.getElementById("glowIntensity");
    const toggleGlow = document.getElementById("toggleGlow");
    const resetStudio = document.getElementById("resetStudio");
    const exportMockup = document.getElementById("exportMockup");
    const transparentExport = document.getElementById("transparentExport");
    const statusEmptyState = document.getElementById("statusEmptyState");

    const trackingRefs = {
        headline: document.getElementById("statusHeadline"),
        lastUpdated: document.getElementById("lastUpdated"),
        expectedDelivery: document.getElementById("expectedDelivery"),
        facilityName: document.getElementById("facilityName"),
        specialistName: document.getElementById("specialistName"),
        confidenceValue: document.getElementById("confidenceValue"),
        confidenceFill: document.getElementById("confidenceFill"),
        smartNotification: document.getElementById("smartNotification"),
        snapshotProduct: document.getElementById("snapshotProduct"),
        snapshotQuantity: document.getElementById("snapshotQuantity"),
        snapshotMaterial: document.getElementById("snapshotMaterial"),
        snapshotDimensions: document.getElementById("snapshotDimensions"),
        snapshotFinish: document.getElementById("snapshotFinish"),
        snapshotProgress: document.getElementById("snapshotProgress"),
        progressPercent: document.getElementById("progressPercent"),
        estimatedTimeline: document.getElementById("estimatedTimeline"),
        journeyProgressFill: document.getElementById("journeyProgressFill"),
        deliveryTruck: document.getElementById("deliveryTruck"),
        trackingProductLabel: document.getElementById("trackingProductLabel"),
        trackingEta: document.getElementById("trackingEta"),
        trackingFacility: document.getElementById("trackingFacility")
    };

    const formatDate = (date) => new Intl.DateTimeFormat("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).format(date);

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    const renderProducts = () => {
        if (!productGrid) return;
        productGrid.innerHTML = productsData.map((product, index) => `
            <article class="product-card-premium" data-reveal style="transition-delay:${index * 80}ms">
                <div class="product-img-wrapper-premium">
                    <img src="${product.img}" alt="${product.name}" onerror="this.src='';">
                </div>
                <div class="product-info-premium">
                    <h3>${product.name}</h3>
                    <p class="product-price ${product.colorClass}">${product.price}</p>
                    <p class="product-moq">${product.moq}</p>
                    <p>${product.desc}</p>
                </div>
            </article>
        `).join("");
    };

    const renderProcess = () => {
        if (!processGrid) return;
        processGrid.innerHTML = processStages.map((stage, index) => `
            <div class="timeline-item glass-card" data-reveal style="transition-delay:${index * 70}ms">
                <div class="step-dot"></div>
                <div class="step-content">
                    <h3 class="${stage.colorClass}">${stage.title}</h3>
                    <p>${stage.desc}</p>
                </div>
            </div>
        `).join("");
    };

    renderProducts();
    renderProcess();

    const freshRevealElements = () => document.querySelectorAll("[data-reveal]");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16, rootMargin: "0px 0px -60px 0px" });

    freshRevealElements().forEach((element) => revealObserver.observe(element));

    if (loader) {
        setTimeout(() => {
            loader.classList.add("loader-hide");
            setTimeout(() => {
                loader.style.display = "none";
            }, 650);
        }, 2200);
    }

    window.addEventListener("scroll", () => {
        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 48);
        }
        document.querySelectorAll("[data-parallax]").forEach((node) => {
            const factor = Number(node.getAttribute("data-parallax")) || 0;
            const rect = node.getBoundingClientRect();
            const offset = (window.innerHeight - rect.top) * factor;
            node.style.transform = `translate3d(0, ${offset * 0.08}px, 0)`;
        });
    }, { passive: true });

    document.querySelectorAll("[data-counter]").forEach((counter) => {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const target = Number(entry.target.getAttribute("data-counter"));
                const startTime = performance.now();
                const duration = 1600;
                const formatter = target >= 1000 ? (value) => value.toLocaleString("en-IN") : (value) => value;
                const tick = (now) => {
                    const progress = clamp((now - startTime) / duration, 0, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    entry.target.textContent = formatter(Math.round(target * eased));
                    if (progress < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.5 });
        counterObserver.observe(counter);
    });

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener("click", () => {
            navLinks.classList.toggle("is-open");
        });
    }

    const openStatusModal = () => {
        if (!statusModal) return;
        statusModal.classList.add("is-open");
        statusModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    };

    const closeStatusModal = () => {
        if (!statusModal) return;
        statusModal.classList.remove("is-open");
        statusModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    };

    document.querySelectorAll(".open-status").forEach((trigger) => {
        trigger.addEventListener("click", () => openStatusModal());
    });

    document.querySelectorAll("[data-close-status]").forEach((closer) => {
        closer.addEventListener("click", closeStatusModal);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeStatusModal();
            assistantPanel?.classList.remove("is-open");
        }
    });

    const buildTrackingResult = (seed) => {
        const profile = trackingProducts[seed % trackingProducts.length];
        const activeIndex = clamp((seed % 8) + 1, 1, trackingStages.length - 2);
        const progress = Math.round(((activeIndex + 1) / trackingStages.length) * 100);
        const confidence = clamp(88 + (seed % 11), 88, 99);
        const expectedDate = new Date();
        expectedDate.setDate(expectedDate.getDate() + (trackingStages.length - activeIndex));
        const updatedDate = new Date();
        updatedDate.setHours(updatedDate.getHours() - ((seed % 5) + 1));
        return {
            ...profile,
            activeIndex,
            progress,
            confidence,
            expectedDate,
            updatedDate
        };
    };

    const renderTrackingStages = (activeIndex) => {
        if (!statusStageList) return;
        statusStageList.innerHTML = trackingStages.map((stage, index) => {
            let className = "status-stage";
            let stateLabel = "Pending";
            if (index < activeIndex) {
                className += " is-complete";
                stateLabel = "Completed";
            } else if (index === activeIndex) {
                className += " is-active";
                stateLabel = "Live";
            }
            return `
                <div class="${className}">
                    <span class="stage-index">${String(index + 1).padStart(2, "0")}</span>
                    <div class="stage-copy">
                        <strong>${stage}</strong>
                        <p>${index === activeIndex ? "Currently moving through this production phase." : "Structured packaging workflow milestone."}</p>
                    </div>
                    <span class="stage-state">${stateLabel}</span>
                </div>
            `;
        }).join("");
    };

    const updateTrackingDashboard = (seedValue) => {
        const result = buildTrackingResult(seedValue);
        if (statusDashboard) statusDashboard.hidden = false;
        if (statusEmptyState) statusEmptyState.hidden = true;
        renderTrackingStages(result.activeIndex);
        trackingRefs.headline.textContent = trackingStages[result.activeIndex];
        trackingRefs.lastUpdated.textContent = formatDate(result.updatedDate);
        trackingRefs.expectedDelivery.textContent = formatDate(result.expectedDate);
        trackingRefs.facilityName.textContent = result.facility;
        trackingRefs.specialistName.textContent = result.specialist;
        trackingRefs.confidenceValue.textContent = `${result.confidence}%`;
        trackingRefs.snapshotProduct.textContent = result.product;
        trackingRefs.snapshotQuantity.textContent = result.quantity;
        trackingRefs.snapshotMaterial.textContent = result.material;
        trackingRefs.snapshotDimensions.textContent = result.dimensions;
        trackingRefs.snapshotFinish.textContent = result.finish;
        trackingRefs.snapshotProgress.textContent = `${result.progress}%`;
        trackingRefs.progressPercent.textContent = `${result.progress}% complete`;
        trackingRefs.estimatedTimeline.textContent = `${trackingStages.length - result.activeIndex} business checkpoints remaining`;
        trackingRefs.smartNotification.textContent = `Your ${result.product.toLowerCase()} workflow is now in ${trackingStages[result.activeIndex].toLowerCase()}.`;
        trackingRefs.trackingProductLabel.textContent = result.product.toUpperCase();
        trackingRefs.trackingEta.textContent = `ETA: ${formatDate(result.expectedDate)}`;
        trackingRefs.trackingFacility.textContent = `Facility: ${result.facility}`;
        requestAnimationFrame(() => {
            trackingRefs.confidenceFill.style.width = `${result.confidence}%`;
            trackingRefs.journeyProgressFill.style.width = `${result.progress}%`;
            trackingRefs.deliveryTruck.style.left = `calc(${result.progress}% - 19px)`;
        });
    };

    statusTrackForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        const orderId = document.getElementById("trackOrderId")?.value.trim() || "PWX-2048";
        const contact = document.getElementById("trackContact")?.value.trim() || "client@brand.com";
        const seedValue = [...`${orderId}${contact}`].reduce((sum, char) => sum + char.charCodeAt(0), 0);
        updateTrackingDashboard(seedValue);
    });

    const assistantCopyMap = {
        "Suggest premium box dimensions for skincare kits.": {
            type: "box",
            text: "For skincare kits, start with a rigid magnetic box and a soft-touch finish so the pack feels premium before the product is even opened."
        },
        "Suggest a kraft packaging setup for food products.": {
            type: "pouch",
            text: "For food packaging, use kraft-led structures with barrier protection so the pack feels warm, practical, and shelf-ready."
        },
        "Suggest a luxury rigid box for gifting.": {
            type: "box",
            text: "Luxury gifting works best with magnetic rigid construction, a deeper reveal, and restrained foil accents."
        },
        "Suggest materials for bottle sleeves and labels.": {
            type: "wrap",
            text: "Bottle sleeves work best when the artwork stays vertical, the label reads cleanly, and the finish supports shelf visibility."
        }
    };

    assistantToggle?.addEventListener("click", () => {
        assistantPanel?.classList.toggle("is-open");
    });

    assistantClose?.addEventListener("click", () => {
        assistantPanel?.classList.remove("is-open");
    });

    document.querySelectorAll(".assistant-chip").forEach((chip) => {
        chip.addEventListener("click", () => {
            const prompt = chip.getAttribute("data-assistant") || "";
            const mapped = assistantCopyMap[prompt];
            if (mapped && assistantReply) {
                assistantReply.textContent = mapped.text;
                state.assistantSuggestedType = mapped.type;
            }
        });
    });

    document.querySelector(".assistant-apply")?.addEventListener("click", () => {
        setProductType(state.assistantSuggestedType);
        document.getElementById("technology")?.scrollIntoView({ behavior: "smooth", block: "start" });
        assistantPanel?.classList.remove("is-open");
    });

    const setActiveChip = (selector, matchAttr, value) => {
        document.querySelectorAll(selector).forEach((chip) => {
            chip.classList.toggle("active", chip.getAttribute(matchAttr) === value);
        });
    };

    const productTypeLabel = (type) => {
        if (type === "wrap") return "Bottle Wrap";
        return type.charAt(0).toUpperCase() + type.slice(1);
    };

    const materialLabel = (material) => {
        const labels = {
            rigid: "Rigid",
            kraft: "Kraft",
            gloss: "Gloss",
            metallic: "Metallic",
            holographic: "Holographic",
            transparent: "Transparent"
        };
        return labels[material] || material;
    };

    const getMockupAsset = () => {
        let assetPath = mockupAssets.box;
        if (state.productType === "bag") {
            assetPath = state.material === "kraft" ? mockupAssets.kraft : mockupAssets.bag;
        } else if (state.productType === "wrap") {
            assetPath = state.material === "transparent" || state.finish === "clear" ? mockupAssets.label : mockupAssets.wrap;
        } else if (state.productType === "pouch") {
            assetPath = mockupAssets.pouch;
        }
        return assetPath.replace("assets/", "assets/blank_");
    };

    const recommendedScaleForType = () => {
        if (state.productType === "wrap") return state.artworkAspect > 1 ? 0.88 : 1.04;
        if (state.productType === "box") return state.artworkAspect > 1.2 ? 0.96 : 1.08;
        if (state.productType === "pouch") return state.artworkAspect < 0.85 ? 1.06 : 0.98;
        if (state.productType === "bag") return state.artworkAspect < 0.9 ? 1.04 : 0.94;
        return 1;
    };

    const getSurfacePreset = () => {
        if (state.productType === "box") {
            if (state.printZone === "front") {
                return { x: 0.48, y: 0.61, w: 0.31, h: 0.16, rotation: 0, skewX: -12, skewY: 0, radius: 10, fit: "cover" };
            }
            if (state.printZone === "inside") {
                return { x: 0.48, y: 0.42, w: 0.27, h: 0.2, rotation: 0, skewX: -8, skewY: 0, radius: 12, fit: "cover" };
            }
            return { x: 0.15, y: 0.08, w: 0.40, h: 0.27, rotation: -23, skewX: -12, skewY: -4, radius: 18, fit: "contain" };
        }
        if (state.productType === "bag") {
            return { x: 0.27, y: 0.22, w: 0.43, h: 0.48, rotation: -5, skewX: -2, skewY: 0, radius: 10, fit: "contain" };
        }
        if (state.productType === "pouch") {
            return { x: 0.54, y: 0.18, w: 0.27, h: 0.53, rotation: -0.5, skewX: -2, skewY: 0, radius: 26, fit: "contain" };
        }
        return { x: 0.33, y: 0.50, w: 0.34, h: 0.35, rotation: 0, skewX: 0, skewY: 0, radius: 10, fit: "cover" };
    };

    const preprocessArtwork = (image) => {
        const sourceCanvas = document.createElement("canvas");
        const sourceCtx = sourceCanvas.getContext("2d");
        if (!sourceCtx) return { dataUrl: "", aspect: 1 };

        sourceCanvas.width = image.naturalWidth;
        sourceCanvas.height = image.naturalHeight;
        sourceCtx.drawImage(image, 0, 0);

        const sourceData = sourceCtx.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height);
        const pixels = sourceData.data;
        let minX = sourceCanvas.width;
        let minY = sourceCanvas.height;
        let maxX = 0;
        let maxY = 0;
        let foundInk = false;

        for (let y = 0; y < sourceCanvas.height; y += 1) {
            for (let x = 0; x < sourceCanvas.width; x += 1) {
                const index = (y * sourceCanvas.width + x) * 4;
                const r = pixels[index];
                const g = pixels[index + 1];
                const b = pixels[index + 2];
                const a = pixels[index + 3];
                const brightness = (r + g + b) / 3;
                const spread = Math.max(r, g, b) - Math.min(r, g, b);
                const isInk = a > 12 && !(brightness > 246 && spread < 16);
                if (!isInk) continue;
                foundInk = true;
                if (x < minX) minX = x;
                if (y < minY) minY = y;
                if (x > maxX) maxX = x;
                if (y > maxY) maxY = y;
            }
        }

        if (!foundInk) {
            minX = 0;
            minY = 0;
            maxX = sourceCanvas.width - 1;
            maxY = sourceCanvas.height - 1;
        }

        const inkWidth = Math.max(1, maxX - minX + 1);
        const inkHeight = Math.max(1, maxY - minY + 1);
        const paddingX = Math.round(inkWidth * 0.08);
        const paddingY = Math.round(inkHeight * 0.08);
        const cropX = Math.max(0, minX - paddingX);
        const cropY = Math.max(0, minY - paddingY);
        const cropW = Math.min(sourceCanvas.width - cropX, inkWidth + paddingX * 2);
        const cropH = Math.min(sourceCanvas.height - cropY, inkHeight + paddingY * 2);

        const outputCanvas = document.createElement("canvas");
        const outputCtx = outputCanvas.getContext("2d");
        if (!outputCtx) return { dataUrl: "", aspect: 1 };
        outputCanvas.width = cropW;
        outputCanvas.height = cropH;
        outputCtx.drawImage(sourceCanvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

        const outputData = outputCtx.getImageData(0, 0, cropW, cropH);
        const outPixels = outputData.data;
        for (let i = 0; i < outPixels.length; i += 4) {
            const r = outPixels[i];
            const g = outPixels[i + 1];
            const b = outPixels[i + 2];
            const a = outPixels[i + 3];
            const brightness = (r + g + b) / 3;
            const spread = Math.max(r, g, b) - Math.min(r, g, b);
            if (a < 10) {
                outPixels[i + 3] = 0;
                continue;
            }
            if (brightness > 250 && spread < 14) {
                outPixels[i + 3] = 0;
                continue;
            }
            if (brightness > 238 && spread < 18) {
                outPixels[i + 3] = Math.round(a * 0.18);
                continue;
            }
            if (brightness > 228 && spread < 24) {
                outPixels[i + 3] = Math.round(a * 0.48);
            }
        }
        outputCtx.putImageData(outputData, 0, 0);
        return {
            dataUrl: outputCanvas.toDataURL("image/png"),
            aspect: cropW / Math.max(cropH, 1)
        };
    };

    const updateStudioInfo = () => {
        if (!mockupInfoType || !mockupInfoMaterial || !mockupInfoDimensions) return;
        const dimensions = `${dimLength.value} x ${dimWidth.value} x ${dimHeight.value} mm`;
        mockupInfoType.textContent = `Type: ${productTypeLabel(state.productType)}`;
        mockupInfoMaterial.textContent = `Material: ${materialLabel(state.material)}`;
        mockupInfoDimensions.textContent = dimensions;
    };

    const applyStudioState = () => {
        if (!studioPack || !mockupPreviewShell) return;
        studioPack.classList.remove("type-box", "type-bag", "type-pouch", "type-wrap", "material-rigid", "material-kraft", "material-gloss", "material-metallic", "material-holographic", "material-transparent", "finish-matte", "finish-soft", "finish-foil", "finish-velvet", "finish-clear", "neon-glow", "effect-standard", "effect-foil", "effect-gloss", "effect-metallic", "effect-holographic", "effect-uv", "effect-emboss", "effect-deboss");
        studioPack.classList.add(`type-${state.productType}`, `material-${state.material}`, `finish-${state.finish}`);
        studioPack.classList.add(`effect-${state.printEffect}`);
        if (state.glow) studioPack.classList.add("neon-glow");
        studioPack.classList.toggle("has-art", Boolean(state.uploadedImage));
        
        const preset = getSurfacePreset();
        studioPack.style.setProperty("--pack-angle", `${state.angle}deg`);
        studioPack.style.setProperty("--pack-shadow-alpha", `${state.shadow / 100}`);
        studioPack.style.setProperty("--reflect-alpha", `${state.reflection / 100}`);
        studioPack.style.setProperty("--ambient-alpha", `${state.ambient / 100}`);
        studioPack.style.setProperty("--glow-alpha", `${state.glowIntensity / 100}`);
        studioPack.style.setProperty("--studio-tilt", `${state.angle}deg`);
        studioPack.style.setProperty("--surface-left", `${preset.x * 100}%`);
        studioPack.style.setProperty("--surface-top", `${preset.y * 100}%`);
        studioPack.style.setProperty("--surface-width", `${preset.w * 100}%`);
        studioPack.style.setProperty("--surface-height", `${preset.h * 100}%`);
        studioPack.style.setProperty("--surface-rotate", `${preset.rotation}deg`);
        studioPack.style.setProperty("--surface-skew-x", `${preset.skewX + state.perspectiveFit * 0.2}deg`);
        studioPack.style.setProperty("--surface-skew-y", `${preset.skewY}deg`);

        artworkLayer?.style.setProperty("--artwork-blend", state.blendMode);
        studioPack.style.setProperty("--surface-radius", `${state.cornerFit}px`);
        mockupPreviewShell.style.setProperty("--preview-zoom", `${state.zoom}`);
        artworkLayer?.style.setProperty("--artwork-scale", `${state.scale}`);
        artworkLayer?.style.setProperty("--artwork-rotate", `${state.rotation}deg`);
        artworkLayer?.style.setProperty("--artwork-x", `${state.x}px`);
        artworkLayer?.style.setProperty("--artwork-y", `${state.y}px`);
        artworkLayer?.style.setProperty("--artwork-fit", preset.fit);
        artworkLayer?.style.setProperty("--artwork-opacity", `${state.opacity}`);
        artworkLayer?.style.setProperty("--artwork-blend", state.blendMode);
        artworkLayer?.style.setProperty("--effect-intensity", `${state.effectIntensity / 100}`);
        studioShadow.style.opacity = `${clamp(state.shadow / 80, 0.25, 1)}`;
        if (mockupProductImage) {
            mockupProductImage.src = getMockupAsset();
            mockupProductImage.alt = `${productTypeLabel(state.productType)} mockup`;
        }
        mockupStage.style.backgroundColor = state.backgroundColor;
        mockupStage.classList.remove("theme-grid-dark", "theme-midnight", "theme-neon-rise", "theme-industrial", "theme-showroom", "theme-white-room", "theme-transparent");
        if (state.transparentExport) {
            mockupStage.classList.add("theme-transparent");
            mockupStage.style.backgroundColor = "transparent";
        } else {
            mockupStage.classList.add(`theme-${state.gradient}`);
        }
        if (printZoneSelect) printZoneSelect.disabled = state.productType !== "box";
        updateStudioInfo();
    };

    const setProductType = (type) => {
        state.productType = type;
        if (type !== "box") {
            state.printZone = "front";
            if (printZoneSelect) printZoneSelect.value = "front";
        } else if (printZoneSelect && !["lid", "front", "inside"].includes(printZoneSelect.value)) {
            state.printZone = "lid";
            printZoneSelect.value = "lid";
        }
        state.scale = recommendedScaleForType();
        if (artworkScale) artworkScale.value = Math.round(state.scale * 100);
        setActiveChip("[data-product-type]", "data-product-type", type);
        applyStudioState();
    };

    const setMaterial = (material) => {
        state.material = material;
        setActiveChip("[data-material]", "data-material", material);
        applyStudioState();
    };

    const setFinish = (finish) => {
        state.finish = finish;
        setActiveChip("[data-finish]", "data-finish", finish);
        applyStudioState();
    };

    document.querySelectorAll("[data-product-type]").forEach((button) => {
        button.addEventListener("click", () => setProductType(button.getAttribute("data-product-type")));
    });

    document.querySelectorAll("[data-material]").forEach((button) => {
        button.addEventListener("click", () => setMaterial(button.getAttribute("data-material")));
    });

    document.querySelectorAll("[data-finish]").forEach((button) => {
        button.addEventListener("click", () => setFinish(button.getAttribute("data-finish")));
    });

    document.querySelectorAll(".gradient-swatch").forEach((button) => {
        button.addEventListener("click", () => {
            state.gradient = button.getAttribute("data-gradient") || "grid-dark";
            document.querySelectorAll(".gradient-swatch").forEach((swatch) => swatch.classList.remove("active"));
            button.classList.add("active");
            applyStudioState();
        });
    });

    printZoneSelect?.addEventListener("change", () => {
        state.printZone = printZoneSelect.value;
        applyStudioState();
    });

    blendModeSelect?.addEventListener("change", () => {
        state.blendMode = blendModeSelect.value;
        applyStudioState();
    });

    printEffectSelect?.addEventListener("change", () => {
        state.printEffect = printEffectSelect.value;
        applyStudioState();
    });

    bgColorPicker?.addEventListener("input", () => {
        state.backgroundColor = bgColorPicker.value;
        if (hexInput) hexInput.value = state.backgroundColor;
        const r = parseInt(state.backgroundColor.slice(1, 3), 16);
        const g = parseInt(state.backgroundColor.slice(3, 5), 16);
        const b = parseInt(state.backgroundColor.slice(5, 7), 16);
        if (rgbR) rgbR.value = r;
        if (rgbG) rgbG.value = g;
        if (rgbB) rgbB.value = b;
        applyStudioState();
    });

    hexInput?.addEventListener("change", () => {
        const value = hexInput.value.trim();
        if (/^#([0-9A-Fa-f]{6})$/.test(value)) {
            state.backgroundColor = value;
            bgColorPicker.value = value;
            const r = parseInt(value.slice(1, 3), 16);
            const g = parseInt(value.slice(3, 5), 16);
            const b = parseInt(value.slice(5, 7), 16);
            if (rgbR) rgbR.value = r;
            if (rgbG) rgbG.value = g;
            if (rgbB) rgbB.value = b;
            applyStudioState();
        }
    });

    const syncRgbToHex = () => {
        const r = clamp(Number(rgbR?.value || 0), 0, 255);
        const g = clamp(Number(rgbG?.value || 0), 0, 255);
        const b = clamp(Number(rgbB?.value || 0), 0, 255);
        const hex = `#${[r, g, b].map((v) => Number(v).toString(16).padStart(2, "0")).join("")}`;
        state.backgroundColor = hex;
        if (hexInput) hexInput.value = hex;
        if (bgColorPicker) bgColorPicker.value = hex;
        applyStudioState();
    };

    [rgbR, rgbG, rgbB].forEach((input) => input?.addEventListener("input", syncRgbToHex));

    [dimLength, dimWidth, dimHeight].forEach((input) => {
        input?.addEventListener("input", updateStudioInfo);
    });

    artworkScale?.addEventListener("input", () => {
        state.scale = Number(artworkScale.value) / 100;
        applyStudioState();
    });

    artworkRotate?.addEventListener("input", () => {
        state.rotation = Number(artworkRotate.value);
        applyStudioState();
    });

    cornerFit?.addEventListener("input", () => {
        state.cornerFit = Number(cornerFit.value);
        applyStudioState();
    });

    effectIntensity?.addEventListener("input", () => {
        state.effectIntensity = Number(effectIntensity.value);
        applyStudioState();
    });

    transparentExport?.addEventListener("change", () => {
        state.transparentExport = transparentExport.checked;
        applyStudioState();
    });

    studioZoom?.addEventListener("input", () => {
        state.zoom = Number(studioZoom.value) / 100;
        applyStudioState();
    });

    studioAngle?.addEventListener("input", () => {
        state.angle = Number(studioAngle.value);
        applyStudioState();
    });

    artworkOpacity?.addEventListener("input", () => {
        state.opacity = Number(artworkOpacity.value) / 100;
        applyStudioState();
    });

    perspectiveFit?.addEventListener("input", () => {
        state.perspectiveFit = Number(perspectiveFit.value);
        applyStudioState();
    });

    shadowIntensity?.addEventListener("input", () => {
        state.shadow = Number(shadowIntensity.value);
        applyStudioState();
    });

    reflectionStrength?.addEventListener("input", () => {
        state.reflection = Number(reflectionStrength.value);
        applyStudioState();
    });

    ambientLighting?.addEventListener("input", () => {
        state.ambient = Number(ambientLighting.value);
        applyStudioState();
    });

    glowIntensity?.addEventListener("input", () => {
        state.glowIntensity = Number(glowIntensity.value);
        applyStudioState();
    });

    toggleGlow?.addEventListener("click", () => {
        state.glow = !state.glow;
        toggleGlow.textContent = state.glow ? "Disable Neon Glow" : "Toggle Neon Glow";
        applyStudioState();
    });

    const resetStudioState = () => {
        state.productType = "box";
        state.material = "rigid";
        state.finish = "matte";
        state.gradient = "grid-dark";
        state.glow = false;
        state.angle = -12;
        state.scale = 1;
        state.rotation = 0;
        state.cornerFit = 10;
        state.effectIntensity = 50;
        state.transparentExport = false;
        state.zoom = 1;
        state.opacity = 1;
        state.perspectiveFit = 0;
        state.shadow = 45;
        state.reflection = 38;
        state.ambient = 54;
        state.glowIntensity = 36;
        state.x = 0;
        state.y = 0;
        state.backgroundColor = "#101010";
        state.artworkAspect = 1;
        state.printZone = "lid";
        state.blendMode = "normal";
        state.printEffect = "standard";
        dimLength.value = 200;
        dimWidth.value = 150;
        dimHeight.value = 50;
        artworkScale.value = 100;
        artworkRotate.value = 0;
        if (cornerFit) cornerFit.value = 10;
        if (effectIntensity) effectIntensity.value = 50;
        if (transparentExport) transparentExport.checked = false;
        studioZoom.value = 100;
        studioAngle.value = -12;
        if (artworkOpacity) artworkOpacity.value = 100;
        if (perspectiveFit) perspectiveFit.value = 0;
        shadowIntensity.value = 45;
        if (reflectionStrength) reflectionStrength.value = 38;
        if (ambientLighting) ambientLighting.value = 54;
        if (glowIntensity) glowIntensity.value = 36;
        bgColorPicker.value = "#101010";
        if (hexInput) hexInput.value = "#101010";
        if (rgbR) rgbR.value = 16;
        if (rgbG) rgbG.value = 16;
        if (rgbB) rgbB.value = 16;
        if (printZoneSelect) printZoneSelect.value = "lid";
        if (blendModeSelect) blendModeSelect.value = "normal";
        if (printEffectSelect) printEffectSelect.value = "standard";
        toggleGlow.textContent = "Toggle Neon Glow";
        state.uploadedImage = "";
        state.uploadedName = "";
        uploadedProductPreview.removeAttribute("src");
        uploadedProductPreview.classList.remove("is-visible");
        if (productImageUpload) productImageUpload.value = "";
        if (uploadStatus) uploadStatus.textContent = "Preview will appear in the studio instantly.";
        document.querySelectorAll(".gradient-swatch").forEach((swatch) => swatch.classList.remove("active"));
        document.querySelector('.gradient-swatch[data-gradient="grid-dark"]')?.classList.add("active");
        setActiveChip("[data-product-type]", "data-product-type", "box");
        setActiveChip("[data-material]", "data-material", "rigid");
        setActiveChip("[data-finish]", "data-finish", "matte");
        applyStudioState();
    };

    resetStudio?.addEventListener("click", resetStudioState);

    productImageUpload?.addEventListener("change", () => {
        const file = productImageUpload.files && productImageUpload.files[0];
        if (!file) return;
        if (!file.type.startsWith("image/")) {
            if (uploadStatus) uploadStatus.textContent = "Please upload a valid image file.";
            return;
        }
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const rawImage = new Image();
            rawImage.onload = () => {
                const processed = preprocessArtwork(rawImage);
                state.uploadedImage = processed.dataUrl;
                state.uploadedName = file.name;
                state.artworkAspect = processed.aspect;
                uploadedProductPreview.src = state.uploadedImage;
                uploadedProductPreview.classList.add("is-visible");
                state.scale = recommendedScaleForType();
                state.x = 0;
                state.y = 0;
                if (artworkScale) artworkScale.value = Math.round(state.scale * 100);
                if (uploadStatus) uploadStatus.textContent = file.name;
                applyStudioState();
            };
            rawImage.src = typeof reader.result === "string" ? reader.result : "";
        });
        reader.readAsDataURL(file);
    });

    let dragStart = null;
    artworkLayer?.addEventListener("pointerdown", (event) => {
        if (!state.uploadedImage) return;
        dragStart = {
            pointerX: event.clientX,
            pointerY: event.clientY,
            x: state.x,
            y: state.y
        };
        artworkLayer.classList.add("is-dragging");
        artworkLayer.setPointerCapture(event.pointerId);
    });

    artworkLayer?.addEventListener("pointermove", (event) => {
        if (!dragStart) return;
        const deltaX = event.clientX - dragStart.pointerX;
        const deltaY = event.clientY - dragStart.pointerY;
        state.x = clamp(dragStart.x + deltaX, -110, 110);
        state.y = clamp(dragStart.y + deltaY, -110, 110);
        applyStudioState();
    });

    const endDrag = (event) => {
        if (!dragStart) return;
        artworkLayer?.releasePointerCapture?.(event.pointerId);
        artworkLayer?.classList.remove("is-dragging");
        dragStart = null;
    };

    artworkLayer?.addEventListener("pointerup", endDrag);
    artworkLayer?.addEventListener("pointercancel", endDrag);

    const loadImage = (src) => new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });

    const drawRoundedRect = (ctx, x, y, width, height, radius) => {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    };

    const getFittedArtworkSize = (surfaceW, surfaceH, artAspect, fit) => {
        const surfaceAspect = surfaceW / Math.max(surfaceH, 1);
        if (fit === "cover") {
            if (artAspect > surfaceAspect) {
                return { width: surfaceH * artAspect, height: surfaceH };
            }
            return { width: surfaceW, height: surfaceW / Math.max(artAspect, 0.01) };
        }
        if (artAspect > surfaceAspect) {
            return { width: surfaceW, height: surfaceW / Math.max(artAspect, 0.01) };
        }
        return { width: surfaceH * artAspect, height: surfaceH };
    };

    exportMockup?.addEventListener("click", async () => {
        const canvas = document.createElement("canvas");
        canvas.width = 1600;
        canvas.height = 1200;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const gradients = {
            "grid-dark": ["#111214", "#060606"],
            midnight: ["#1b2230", "#070910"],
            "neon-rise": ["#2b1322", "#08111c"],
            industrial: ["#171717", "#0b0b0b"],
            showroom: ["#11161e", "#24242b"],
            "white-room": ["#dce0e7", "#ffffff"]
        };
        if (!state.transparentExport) {
            const gradientStops = gradients[state.gradient] || gradients["grid-dark"];
            const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            bgGradient.addColorStop(0, gradientStops[0]);
            bgGradient.addColorStop(1, gradientStops[1]);
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(255,255,255,0.04)";
            for (let x = 0; x < canvas.width; x += 60) {
                ctx.fillRect(x, 0, 1, canvas.height);
            }
            for (let y = 0; y < canvas.height; y += 60) {
                ctx.fillRect(0, y, canvas.width, 1);
            }
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        const productImg = await loadImage(getMockupAsset());
        const fitWidth = state.productType === "wrap" ? 460 : state.productType === "bag" && state.material === "kraft" ? 820 : 900;
        const drawW = fitWidth;
        const drawH = (productImg.naturalHeight / productImg.naturalWidth) * drawW;
        const drawX = (canvas.width - drawW) / 2;
        const drawY = state.productType === "box" ? 150 : 160;

        const preset = getSurfacePreset();

        ctx.save();
        ctx.shadowColor = `rgba(0,0,0,${state.shadow / 100})`;
        ctx.shadowBlur = 48;
        ctx.shadowOffsetY = 26;
        ctx.beginPath();
        ctx.ellipse(canvas.width / 2, drawY + drawH - 12, drawW * 0.28, 46, 0, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,0,0,0.48)";
        ctx.fill();
        ctx.restore();

        ctx.drawImage(productImg, drawX, drawY, drawW, drawH);

        const surfaceX = drawX + drawW * preset.x;
        const surfaceY = drawY + drawH * preset.y;
        const surfaceW = drawW * preset.w;
        const surfaceH = drawH * preset.h;
        const centerX = surfaceX + surfaceW / 2;
        const centerY = surfaceY + surfaceH / 2;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate((preset.rotation * Math.PI) / 180);
        ctx.transform(1, 0, Math.tan(((preset.skewX + state.perspectiveFit * 0.2) * Math.PI) / 180), 1, 0, 0);
        drawRoundedRect(ctx, -surfaceW / 2, -surfaceH / 2, surfaceW, surfaceH, preset.radius);
        let surfaceFill = "rgba(12,12,12,0.96)";
        if (state.material === "kraft") surfaceFill = "rgba(150,110,58,0.96)";
        if (state.material === "gloss") surfaceFill = "rgba(15,18,26,0.96)";
        if (state.material === "metallic") surfaceFill = "rgba(126,136,152,0.96)";
        if (state.material === "holographic") surfaceFill = "rgba(94,73,156,0.92)";
        if (state.material === "transparent") surfaceFill = "rgba(255,255,255,0.2)";
        ctx.fillStyle = surfaceFill;
        ctx.fill();
        ctx.strokeStyle = state.finish === "foil" ? "rgba(247,219,86,0.54)" : "rgba(255,255,255,0.16)";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.clip();

        if (state.uploadedImage) {
            try {
                const artImg = await loadImage(state.uploadedImage);
                const fitted = getFittedArtworkSize(surfaceW, surfaceH, state.artworkAspect, preset.fit);
                const artW = fitted.width * state.scale;
                const artH = fitted.height * state.scale;
                ctx.save();
                ctx.translate(state.x * 2.1, state.y * 2.1);
                ctx.rotate((state.rotation * Math.PI) / 180);
                ctx.globalAlpha = state.opacity;
                ctx.globalCompositeOperation = state.blendMode;
                ctx.drawImage(artImg, -artW / 2, -artH / 2, artW, artH);
                ctx.restore();
            } catch (error) {
                // Ignore artwork draw failures and continue export.
            }
        }

        const gloss = ctx.createLinearGradient(-surfaceW / 2, -surfaceH / 2, surfaceW / 2, surfaceH / 2);
        gloss.addColorStop(0, `rgba(255,255,255,${0.08 + state.reflection / 500})`);
        gloss.addColorStop(0.45, "rgba(255,255,255,0.02)");
        gloss.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = gloss;
        ctx.fillRect(-surfaceW / 2, -surfaceH / 2, surfaceW, surfaceH);
        ctx.restore();

        if (!state.transparentExport) {
            ctx.fillStyle = "rgba(255,255,255,0.78)";
            ctx.font = "700 32px Inter";
            ctx.fillText("Packworks AI Packaging Studio", 80, 84);
            ctx.fillStyle = "rgba(255,255,255,0.52)";
            ctx.font = "500 20px Inter";
            ctx.fillText(`${state.productType.toUpperCase()}  |  ${state.material.toUpperCase()}  |  ${dimLength.value} x ${dimWidth.value} x ${dimHeight.value} mm`, 80, 122);
        }

        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = `packworks-mockup-${Date.now()}.png`;
        link.click();
    });

    let pmouseX = 0;
    let pmouseY = 0;
    let pTargetX = 0;
    let pTargetY = 0;
    let pTime = 0;

    const animateStudioMockup = () => {
        pmouseX += (pTargetX - pmouseX) * 0.08;
        pmouseY += (pTargetY - pmouseY) * 0.08;
        pTime += 0.015;

        const floatY = Math.sin(pTime) * -8;
        const floatRotateX = Math.sin(pTime * 0.8) * 1.5;

        if (studioPack && mockupPreviewShell) {
            studioPack.style.setProperty("--mouse-x", pmouseX);
            studioPack.style.setProperty("--mouse-y", pmouseY);
            studioPack.style.setProperty("--float-y", `${floatY}px`);
            studioPack.style.setProperty("--float-rx", `${floatRotateX}deg`);
        }
        requestAnimationFrame(animateStudioMockup);
    };
    animateStudioMockup();

    mockupPreviewShell?.addEventListener("mousemove", (e) => {
        const rect = mockupPreviewShell.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        pTargetX = x;
        pTargetY = y;
    });

    mockupPreviewShell?.addEventListener("mouseleave", () => {
        pTargetX = 0;
        pTargetY = 0;
    });

    document.querySelectorAll(".product-card-premium").forEach((card) => {
        card.addEventListener("mousemove", (event) => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const rotateY = ((x / rect.width) - 0.5) * 10;
            const rotateX = (((y / rect.height) - 0.5) * -10);
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });

    resetStudioState();
});
