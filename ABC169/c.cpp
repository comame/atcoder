#include <iostream>
#include <math.h>

int main() {
    long long a;
    double b;
    std::cin >> a >> b;

    int bx100 = b * 100;
    long double ans = 0;
    modfl(a * bx100 / 100, &ans);

    std::cout << (long long) ans << std::endl;
}
