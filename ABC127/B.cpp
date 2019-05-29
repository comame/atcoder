#include <iostream>

int main() {
    int r, d;
    int x[11];

    std::cin >> r >> d;
    std::cin >> x[0];

    for (int i = 1; i <= 10; i++) {
        x[i] = r * x[i - 1] - d;
        std::cout << x[i] << std::endl;
    }
}