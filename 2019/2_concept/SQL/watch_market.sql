DROP TABLE IF EXISTS custom.WatchMarket;

CREATE TABLE custom.WatchMarket (
    id INT(8) PRIMARY KEY AUTO_INCREMENT,
    url TEXT,
    company VARCHAR(50) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    selector_product_price VARCHAR(255) NOT NULL,
    product_price VARCHAR(20) NOT NULL,
    selector_product_image VARCHAR(255),
    product_image TEXT
)