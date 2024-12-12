using DTOs;
using Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services
{
    public interface IShiurService
    {
        Task<IEnumerable<ShiurDTO>> GetAllAsync();
        Task<ShiurDTO> GetByIdAsync(int id);
        Task<IEnumerable<ShiurDTO>> GetByLengthAsync(TimeSpan minLength, TimeSpan maxLength);
        Task<IEnumerable<ShiurDTO>> GetByYearAsync(int year);
        Task<IEnumerable<ShiurDTO>> GetByRavIdAsync(int ravId);
        Task <ShiurDTO> AddAsync(ShiurDTO shiur);
        Task<ShiurDTO> UpdateAsync(ShiurDTO shiur);
        Task DeleteAsync(int id);
    }
}
