const greetingWithWeather = (name, weather) => {
    const greeting = { name, weather };

    if (weather === "sunny") {
        return `Chào ${greeting.name}, Hôm nay trời nắng tuyệt vời!`;
    } else if (weather === "rainy") {
        return `Chào ${greeting.name}, Hôm nay trời mưa, hãy mang theo ô!`;
    } else {
        return `Chào ${greeting.name}, Hôm nay thời tiết không xác định`;
    }
};
console.log(greetingWithWeather("Dev", "sunny"));
console.log(greetingWithWeather("Duong", "rainy"));
console.log(greetingWithWeather("An", "cloudy"));